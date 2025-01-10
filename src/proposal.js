import React, { useEffect, useRef, useState } from 'react';
import './proposal.css';
import { useNavigate } from 'react-router-dom';

const Proposal = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseExit = () => {
      setIsHovered(false);
    };

    const buttonElement = buttonRef.current;

    if (buttonElement) {
      buttonElement.addEventListener('mouseenter', handleMouseEnter);
      buttonElement.addEventListener('mouseleave', handleMouseExit);
    }

    return () => {
      buttonElement.removeEventListener('mouseenter', handleMouseEnter);
      buttonElement.removeEventListener('mouseleave', handleMouseExit);
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      let randomX = 0;
      let randomY = 0;
      const buttonElement = buttonRef.current;
      function randomizer() {
        randomX = Math.random() * 400;
        randomY = Math.random() * 700;

        // Ensure the new position is not too close to the current one
        const currentX = parseFloat(buttonElement.style.left || 0);
        const currentY = parseFloat(buttonElement.style.top || 0);

        if (
          Math.abs(randomX - currentX) < 60 ||
          Math.abs(randomY - currentY) < 60
        ) {
          randomizer();
        }
      }
      randomizer();

      buttonElement.style.position = 'absolute';
      buttonElement.style.left = `${randomX}px`;
      buttonElement.style.top = `${randomY}px`;
    }
  }, [isHovered]);

  return (
    <div className='main-container'>
      <div className='begging'>
        <img
          src='/begging.gif'
          alt='gif'
        />
      </div>
      <div className='proposal-container'>
        <h1 className='marry'>WILL YOU MARRY ME?</h1>
        <button
          className='yes'
          onClick={() => {
            navigate('/celebration');
          }}>
          YES
        </button>
      </div>
      <button
        ref={buttonRef}
        onClick={() => setIsHovered(true)}
        className='no'>
        NO
      </button>
    </div>
  );
};

export default Proposal;
