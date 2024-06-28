import React from 'react';
import './About.css'; // Ensure correct path to CSS file
import aboutImage from '../../assets/ab1.jpeg'; // Assuming your image is in the correct path

function About() {
  return (
    <div className="about-section" id="about">
      <div className="image-wrapper">
        <div className="image-container">
          <img src={aboutImage} alt="About" />
        </div>
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>
          Welcome to Avartan Academy, where the rhythm of tradition meets the grace of modernity.
          Established in 2011, we specialize in Kathak dance, a beautiful art form indigenous to
          Northern India. Kathak's rich history, influenced by both Hindu and Muslim cultures,
          shines through in its emphasis on poses, expressions, grace, hand, eye, body movements,
          and intricate footwork. 💃🏽🕺🏽
        </p>
      </div>
      <div className="content">
        <h2>Meet Our Instructor</h2>
        <p>
          Our esteemed instructor, with qualifications such as Prabhakar Kathak, Achariya, and an Ma dance in khairagarh University, brings unparalleled expertise and passion to every class. With a robust teaching background spanning prestigious institutions like Sant Kabir ICSE Board Hisar and Delhi Public School Hisar, our instructor has been nurturing talents at O.P. Jindal Modern School for the past 13 years. 🌟📚
        </p>
      </div>
    </div>
  );
}

export default About;
