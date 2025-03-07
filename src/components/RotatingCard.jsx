import React, { useState } from 'react';
import '../App.css' ;

const RotatingCard = ({ title, name, image, heading, message }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div 
          className="card-front" 
          style={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="card-front-overlay">
            <h3 className="card-front-title">{title}</h3>
            <h4 className="card-front-name">{name}</h4>
            <button 
              onClick={handleFlip}
              className="card-front-button"
            >
              Show Message
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <h3 className="card-back-heading">{heading}</h3>
          <p className="card-back-message">{message}</p>
          <button 
            onClick={handleFlip}
            className="card-back-button"
          >
            Hide Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;