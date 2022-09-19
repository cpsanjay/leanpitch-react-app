import React from "react";
import "./Meeting.css";

const Meeting = () => {
  return (
    <div className="meeting-container">
      <h1>Our Meetups</h1>
      <div className="button-container-meetup">
        <button className="active">Upcoming</button>
        <button className="not-active">Past</button>
      </div>
      <p>Awesome meetups will bw here soon</p>
    </div>
  );
};

export default Meeting;
