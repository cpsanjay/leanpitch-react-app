import React from "react";
import "./LeanPitchLabs.css";
import Lab from "../../images/pt_lab_image.png";

const LeanPitchLabs = () => {
  return (
    <div className="leanpitch-container">
      <div className="leanpitch-container-text">
        <div className="leanpitch-container-text-heading">
          <h1>Leanpitch Thinking Labs</h1>
        </div>
        <div className="leanpitch-container-text-content">
          <div>
            Product Thinking Community introduces PT Labs powered by Leanpitch.
            Product Managers are creative thinkers and lide ling researchers.
            Their curiosity to understandthe problem, prersistance to solve
            them, and empathy to make the solution easy makes them resourceful
            in solving Social Problems.
          </div>
          <div>
            If you hace it in you and looking for an opportunity to contribute
            back to society problem, swarm together, design, and run experiment
            to find a problem/solution fit. Present your discovery and be
            recognized at mext Product Thinking Conderence. Product Thinking
            community will persue further on implementing a solution in the
            subsequent cohorts, which you can again be part of.
          </div>
          <div>
            Share your interest by submitting your details. We will get back to
            you with more information
          </div>
          <div className="button-container">
            <button>
              View Details
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
            <button>
              Register Now
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
        </div>
      </div>
      <img src={Lab} alt="" className="leanpitch-container-img" />
    </div>
  );
};

export default LeanPitchLabs;
