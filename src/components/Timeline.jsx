import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-50px'
    });

    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  const milestones = [
    {
      year: '2016',
      title: 'Foundation',
      description: 'Established Yuva Upanishad Publication with our first Current Affairs series',
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Expanded our catalog to include specialized materials for state-level examinations',
    },
    {
      year: '2020',
      title: 'Bilingual Launch',
      description: 'Introduced comprehensive study materials in both Gujarati and English',
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      description: 'Launched digital versions of our publications for enhanced accessibility',
    },
    {
      year: '2023',
      title: 'Milestone',
      description: 'Surpassed the landmark of publishing 100 distinct titles',
    },
    {
      year: '2025',
      title: 'Looking Forward',
      description: 'Continuing to innovate and expand our educational resources',
    }
  ];

  return (
    <div className="timeline" ref={timelineRef}>
      {milestones.map((milestone, index) => (
        <div 
          key={index} 
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="timeline-content">
            <div className="timeline-year">{milestone.year}</div>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;