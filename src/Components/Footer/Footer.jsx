// footer.jsx
import React from 'react';
import './Footer.css'; // Ensure the path is correct

// Example image imports, adjust paths as needed
import img3 from '../../assets/g4.jpeg';
import img4 from '../../assets/g5.jpeg';
import img6 from '../../assets/g6.jpeg';
import img8 from '../../assets/g7.jpeg';
import img10 from '../../assets/g9.jpeg';
import img11 from '../../assets/g10.jpeg';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Phone: 79887-98963</p>
          <p>Email: avartansway@gmail.com</p>
          <p>Address: H.No. 36,37, PatelNagar, Hisar</p>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <ul>
            <li><a href="https://www.facebook.com/share/JuzSW5q4ZQfqgLQm/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/avartan_kathak_sway?igsh=bXl1MTNjZDlibWFz" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com/@archanarai9529" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
        <div className="image-gallery">
          <h2>Gallery</h2>
          <div className="gallery">
            <img src={img3} alt="Gallery " />
            <img src={img4} alt="Gallery " />
            <img src={img6} alt="Gallery " />
            <img src={img8} alt="Gallery " />
            <img src={img10} alt="Gallery " /> {/* Corrected alt text */}
            <img src={img11} alt="Gallery " />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Aavartan Kathak Kendra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
