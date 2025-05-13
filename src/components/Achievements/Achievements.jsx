import React, { useEffect, useState, useRef } from 'react';
import { Book, Users, Trophy, Medal } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(new Set());

  const achievementsData = [
    {
      id: 1,
      icon: <Book size={46} />,
      number: 100,
      plus: true,
      title: 'Published Titles',
      description: 'A diverse and growing catalog designed to empower learners across disciplines.'
    },
    {
      id: 2,
      icon: <Users size={46} />,
      number: 5000,
      plus: true,
      title: 'Loyal Readers',
      description: 'Trusted by a growing community who rely on our content for knowledge, guidance, and inspiration.'
    },
    {
      id: 3,
      icon: <Trophy size={46} />,
      number: 1,
      plus: false,
      title: 'Top Ranks on Amazon',
      description: 'Recognized nationwide—our titles consistently rank among the bestsellers in their categories.'
    },
    {
      id: 4,
      icon: <Medal size={46} />,
      number: 1,
      plus: false,
      title: 'Book Publisher in Gujarat',
      description: 'Proudly leading the state in educational publishing with unmatched quality and trust.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const Counter = ({ number, plus, index }) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isVisible || index >= 2 || hasAnimatedRef.current.has(index)) {
      setCount(number);
      return;
    }

    const duration = 2000;
    const start = 0;
    const end = number;

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const current = Math.min(start + (progress / duration) * end, end);
      setCount(Math.floor(current));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
        hasAnimatedRef.current.add(index); // Mark as animated
      }
    };

    const animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, number, index]);

  return (
    <span className="achievement-number">
      {count}
      {plus && <span className="plus">+</span>}
    </span>
  );
};



  return (
    <section className="achievements-section" ref={sectionRef}>
      <div className="achievements-container">
        <div className="achievements-header">
          <h2>Our Achievements</h2>
        </div>
        
        <div className="achievements-content">
          {achievementsData.map((achievement, index) => (
            <div 
              className="achievement-card" 
              key={achievement.id}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-info">
                <div className="achievement-title">
                 <Counter 
  number={achievement.number} 
  plus={achievement.plus} 
  index={index}
/>

                  <h3>{achievement.title}</h3>
                </div>
                <p>{achievement.description}</p>
              </div>
              <div className="card-bg-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;