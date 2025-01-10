import React from 'react';
import './celebration.css';

const Celebration = () => {
  return (
    <div className='celeb-container'>
      <div className='images'>
        <img
          className='celeb'
          src='celeb.gif'
          alt='celeb'
        />
        <img
          className='yay'
          src='yaaaay.gif'
          alt='yaay'
        />
        <img
          className='hooray'
          src='yay-hooray.gif'
          alt='hooray'
        />
        <img
          className='celebYes'
          src='yes.gif'
          alt='yes'
        />
      </div>
      <div className='text'>
        <h1>CONGRATULATIONS.</h1>
        <h1>YOU ARE THE LUCKIEST PERSON ALIVE</h1>
      </div>
    </div>
  );
};

export default Celebration;
