import React from "react";
import Arrow from "../../images/red_arrow.png";
import "./WhyWeMatter.css";

const WhyWeMatter = () => {
  return (
    <div className="why-we-matter">
      <div className="heading-container">
        <h2>Why We Matter?</h2>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className="why-we-matter-container">
        <div className="why-we-matter-title">
          <h1>Creative Thinking for creating an impact</h1>
          <span>
            Leanpitch is problem solving. Whenever it's your kid asking for a
            solution to his day to day problems or the rise in threats of Global
            Warming. it's evident that the whole human kind needs to be product
            thinkers. We, at Product Thinking Community, strive to provide such
            a platform for practitioners to come together and learn from each
            other about the craft of building products. This Platform is run by
            the community for the community. We are a community with 46k+
            product thinkers hosting various events accross India: Webinars
            ecery week, meet-ups ecery month in every city, two conferece a
            year.
          </span>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt=""
        />
      </div>
      <button>
        Join Our Community
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

export default WhyWeMatter;
