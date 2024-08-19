import { useEffect } from 'react';

const CircularCollage = ({ children }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.menu-item');
    const collageContainer = document.querySelector('.collage-container');
    const containerWidth = collageContainer.offsetWidth;
    const containerHeight = collageContainer.offsetHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8; // Adjust this value to change the size of the circle

    cards.forEach((card, index) => {
      const angle = (2 * Math.PI * index) / cards.length;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      card.style.transform = `translate(${x - centerX}px, ${y - centerY}px)`;
    });
  }, []);

  return <div className="circular-collage">{children}</div>;
};

export default CircularCollage;