import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Gallery.css';
import { allBooks } from '../components/Hero/Book';
import Pagination from '../components/Pagination/Pagination';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(allBooks.length / itemsPerPage);

  const paginatedItems = allBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

useEffect(() => {
  const loadImage = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => resolve(imageUrl);
      img.onerror = reject;
    });
  };

  const loadAllImages = async () => {
    try {
      await Promise.all(paginatedItems.map(img => loadImage(img.cover)));
      setLoading(false);
    } catch (error) {
      console.error('Error loading images:', error);
      setLoading(false);
    }
  };

  setLoading(true);
  loadAllImages();
}, [currentPage]);

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const handleKeyDown = (e) => {
    if (!selectedImage) return;

    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const navigateImage = (direction) => {
    const currentIndex = allBooks.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allBooks.length - 1;
    } else {
      newIndex = currentIndex < allBooks.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(allBooks[newIndex]);
  };

  return (
    <section className="gallery-container main-container">
      <h2>Discover Our Book Collection</h2>
      <p className="section-intro">
        Explore a curated selection of books designed to enlighten, inspire, and empower learners at every stage. From foundational concepts to advanced insights, our collection supports academic success and lifelong learning.
      </p>
<div className="amazon-store-link">
  <a
    href="https://www.amazon.in/storefront?me=A1HV7Z9ZMP49GP&ref_=ssf_share"
    target="_blank"
    rel="noopener noreferrer"
    className="amazon-button"
  >
    <img
      src="/icons/amazon.png"
      alt="Shop on Amazon"
      className="amazon-logo"
    />
    Shop on Amazon
  </a>
</div>

      <div className="gallery-grid">
        {paginatedItems.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            {(!loadedImages[image.id] || loading) && (
              <Skeleton height="100%" />
            )}
            <img
              src={image.cover}
              alt={image.title}
              onLoad={() => handleImageLoad(image.id)}
              style={{ display: loadedImages[image.id] ? 'block' : 'none' }}
            />
            <div className="gallery-item-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X />
            </button>
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
              <ChevronLeft />
            </button>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
              <ChevronRight />
            </button>
            <img src={selectedImage.cover} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default Gallery;
