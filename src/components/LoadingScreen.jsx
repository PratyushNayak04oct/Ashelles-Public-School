import React from 'react';
import '../App.css';

function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex justify-center items-center" id="loader-container">
      <div className="px-12 flex flex-row justify-center items-center py-12 relative" id="loader">
        {/* Original inner orange loader - anticlockwise */}
        <div className="circular-path path-1">
          <div className="loader-spinner orange-spinner"></div>
        </div>
        
        {/* New blue loader between first and second - clockwise */}
        <div className="circular-path path-2 clockwise">
          <div className="loader-spinner blue-spinner"></div>
        </div>
        
        {/* Original outer blue loader - clockwise */}
        <div className="circular-path path-3 clockwise">
          <div className="loader-spinner blue-spinner"></div>
        </div>
        
        {/* New outermost orange loader - anticlockwise */}
        <div className="circular-path path-4">
          <div className="loader-spinner orange-spinner"></div>
        </div>
        
        <h1 className="font-extrabold text-[#000B58] text-4xl blinking-text" id="loader-text">
          APS
        </h1>
      </div>
    </div>
  );
}

export default LoadingScreen;