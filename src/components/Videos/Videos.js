import React from "react";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="webinar-container">
      <h1>Videos</h1>

      <div className="video-container">
        <div className="webinar-grid">
          <div className="single-webinar"></div>
        </div>
        <div className="webinar-grid">
          <div className="single-webinar"></div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
