import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Gallery.css';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg',
    title: 'Study Materials Display',
    description: 'Our comprehensive collection of study materials for competitive exams.'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg',
    title: 'Student Success',
    description: 'Students achieving their goals with our educational resources.'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg',
    title: 'Learning Environment',
    description: 'Creating an ideal atmosphere for focused study and preparation.'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/4778619/pexels-photo-4778619.jpeg',
    title: 'Digital Resources',
    description: 'Modern learning tools and digital study materials.'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/4778620/pexels-photo-4778620.jpeg',
    title: 'Group Study',
    description: 'Collaborative learning environments for better understanding.'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/4778618/pexels-photo-4778618.jpeg',
    title: 'Library Collection',
    description: 'Extensive collection of books and study materials.'
  }
];

const Gallery = () => {
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
        await Promise.all(images.map(img => loadImage(img.url)));
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    loadAllImages();
  }, []);

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
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(images[newIndex]);
  };

  return (

    <>  
    

    <section className="gallery-container main-container">
      <h2>Discover Our Book Collection</h2>
        <p className="section-intro">
          Explore a curated selection of books designed to enlighten, inspire, and empower learners at every stage. From foundational concepts to advanced insights, our collection supports academic success and lifelong learning.
        </p>
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            {(!loadedImages[image.id] || loading) && (
              <Skeleton height="100%" />
            )}
            <img
              src={image.url}
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
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              <X />
            </button>
            <button
              className="lightbox-nav prev"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft />
            </button>
            <button
              className="lightbox-nav next"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight />
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default Gallery;