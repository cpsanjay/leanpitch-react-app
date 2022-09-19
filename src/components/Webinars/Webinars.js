import React from "react";
import "./Webinars.css";

const Webinars = () => {
  return (
    <div className="webinar-container">
      <h1>Our Webinars</h1>
      <div className="button-container-webinar">
        <button className="active">Upcoming</button>
        <button className="not-active">Past</button>
      </div>
      <div className="webinar-grid">
        <div className="single-webinar">
          <div className="webinar-info">
            <p>Remaining in Problem Domain for User Needs - How does it help</p>
            <p>30th Sep, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
