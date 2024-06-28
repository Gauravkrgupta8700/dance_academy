import React from 'react';
import img from '../../assets/s1.jpeg';
import img1 from '../../assets/s2.jpeg';
import img2 from '../../assets/s3.jpeg';
import img3 from '../../assets/s4.jpeg';
import img4 from '../../assets/s5.jpeg';
import img6 from '../../assets/s6.jpeg';

import './Slider.css'; 

function Slider() {
  const images = [img, img1, img2, img3, img4, img6];

  return (
    <>
      <div className="context">
      
          <h1>Special Classes</h1>
          <ul className='class-list'>
            <li>Classic</li>
            <li>Semi Classic</li>
            <li>Bollywood</li>
          </ul>
          
          <div className='slider-container'>
            {images.map((image, index) => (
              <div className='slider-item' key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
         
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </>
  );
}

export default Slider;
