import React, { useEffect, useRef } from 'react';
import './HeroBackground.css';

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    // Mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    window.addEventListener('mousemove', function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // Particle class - moved above usage
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.speedFactor = Math.random() * 0.5 + 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 3 * this.speedFactor;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 3 * this.speedFactor;
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 3 * this.speedFactor;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 3 * this.speedFactor;
          }
        }

        this.x += this.directionX * this.speedFactor;
        this.y += this.directionY * this.speedFactor;

        this.draw();
      }
    }

    // Create particle array
    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 2) - 1;
        const directionY = (Math.random() * 2) - 1;

        const colors = [
          'rgba(255, 102, 0, 0.3)',
          'rgba(255, 102, 0, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(220, 220, 220, 0.15)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Connect particles with lines
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = ((particlesArray[a].x - particlesArray[b].x) ** 2)
            + ((particlesArray[a].y - particlesArray[b].y) ** 2);

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(255, 102, 0, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }

      connect();
    }

    // Set canvas size and initialize particles
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup
    animate();      // Start animation

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-background-canvas"></canvas>;
};

export default HeroBackground;
