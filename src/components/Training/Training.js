import React from "react";
import "./Training.css";
import { trainingData } from "./../../trainingData";

const Training = () => {
  return (
    <div className="training-ontainer">
      <h1 className="training-title">Our Training</h1>
      <div className="training-elements">
        {trainingData.map((data) => {
          return (
            <div
              className="training-element1"
              style={{ backgroundColor: data.backgroundColor }}
            >
              <img src={data.imgUrl} alt="" width="100px" />
              <p>{data.title}</p>
              <div className="date">
                <p className="upcoming">Upcoming Training</p>
                <p>{data.date}</p>
              </div>
              <button className="register-btn">Register</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Training;
