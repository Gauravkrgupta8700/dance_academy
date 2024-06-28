import React, { useState } from 'react';
import './joinUs.css';

function JoinUs() {
  const [showCard, setShowCard] = useState(false);

  const handleJoinUs = () => {
    setShowCard(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-title">Unleash Your Rhythm: Elevate Your Dance with Us</h1>
        <button className="join-button" onClick={handleJoinUs}>Join Our Dance Academy</button>
        {showCard && (
          <div className="card">
            <h2 className="card-title">Our Location:</h2>
            <div className="card-content">
              <p>HN-36,37</p>
              <p>Patel Nagar</p>
              <p>Hisar</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default JoinUs;
