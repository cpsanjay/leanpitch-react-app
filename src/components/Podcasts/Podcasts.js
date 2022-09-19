import React from "react";
import "./Podcasts.css";

const Podcasts = () => {
  return (
    <div className="webinar-container">
      <h1>Podcasts</h1>

      <div className="podcast-grid">
        <div className="single-podcast">
          <div className="podcast-info">
            <p>Podcast 1</p>
          </div>
        </div>
        <div className="single-podcast">
          <div className="podcast-info">
            <p>Podcast 2</p>
          </div>
        </div>
        <div className="single-podcast">
          <div className="podcast-info">
            <p>Podcast 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
