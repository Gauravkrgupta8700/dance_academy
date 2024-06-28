import React from 'react';
import './Gallery.css';

import img from '../../assets/g1.jpeg';

import img2 from '../../assets/g3.jpeg';
import img3 from '../../assets/g4.jpeg';
import img4 from '../../assets/g5.jpeg';
import img6 from '../../assets/g6.jpeg';
import img8 from '../../assets/g7.jpeg';
import img9 from '../../assets/g8.jpeg';
import img10 from '../../assets/g9.jpeg';
import img11 from '../../assets/g10.jpeg';
import img12 from '../../assets/g12.jpeg';

function Gallery() {
  const images = [img, img2, img3, img4, img6, img8, img9, img10, img11, img12];

  return (
    <div className='gallery'>
      <h2>Our Gallery</h2>
      <div className='image-container'>
        {images.map((image, index) => (
          <div className='image-wrapper' key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
