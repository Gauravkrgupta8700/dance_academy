import React from 'react';
import './Gallery.css';

import img from '../../assets/1.png';

import img2 from '../../assets/2.png';
import img3 from '../../assets/4.png';
import img4 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img8 from '../../assets/7.png';
import img9 from '../../assets/8.png';
import img10 from '../../assets/9.png';
import img11 from '../../assets/10.png';
import img12 from '../../assets/17.png';
import img13 from '../../assets/11.png';
import img14 from '../../assets/12.png';
import img15 from '../../assets/13.png';
import img16 from '../../assets/15.png';
import img17 from '../../assets/14.png';
import img18 from '../../assets/16.png';


function Gallery() {
  const images = [img, img18, img3, img4, img6, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];

  return (
    <div className='gallery'>
      <h2>Our Gallery</h2>
      <div className='image-container'>
        {images.map((image, index) => (
          <div className='image-wrapper' key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} target="blank" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
