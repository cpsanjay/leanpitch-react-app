import React from "react";
import "./Conference.css";

const Conference = () => {
  return (
    <div className="meeting-container">
      <h1>Our Conference</h1>
      <div className="button-container-meetup">
        <button className="active">Upcoming</button>
        <button className="not-active">Past</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
        corporis repellendus assumenda aliquid adipisci debitis iure laboriosam
        doloremque praesentium voluptas nobis repudiandae explicabo eaque
        voluptates placeat. Eaque cupiditate assumenda nobis?
      </p>
      <button className="conference-btn">
        Notify Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Conference;
