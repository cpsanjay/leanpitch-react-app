import React from "react";
import "./SpeakSeries.css";

const SpeakSeries = () => {
  return (
    <div className="webinar-container">
      <h1>PM Speak Series</h1>

      <div className="speak-container">
        <div className="webinar-grid">
          <div className="single-speak"></div>
        </div>
        <div className="webinar-grid">
          <div className="single-speak"></div>
        </div>
        <div className="webinar-grid">
          <div className="single-speak"></div>
        </div>
        <div className="webinar-grid">
          <div className="single-speak"></div>
        </div>
      </div>
    </div>
  );
};

export default SpeakSeries;
