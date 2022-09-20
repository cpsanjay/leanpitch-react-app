import React, { useState } from "react";
import "./Header.css";
import SpeakSeries from "../SpeakSeries/SpeakSeries";
import Blog from "./../Blog/Blog";
import Training from "./../Training/Training";
import Meeting from "./../Meeting/Meeting";
import Webinars from "./../Webinars/Webinars";
import Conference from "./../Conference/Conference";
import Videos from "./../Videos/Videos";
import Podcasts from "./../Podcasts/Podcasts";
import BeASpeaker from "./../BeASpeaker/BeASpeaker";
import BeAVolunteer from "./../BeAVolunteer/BeAVolunteer";
import AboutUs from "./../AboutUs/AboutUs";

const Header = () => {
  const [border, setBorder] = useState("");
  const [outlet, setOutlet] = useState(false);
  return (
    <header>
      <div className="sidebar">
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("training");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Training
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("meeting");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Meeting
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("webinars");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Webinars
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("conference");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Conference
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("videos");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Videos
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("speak");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          PM Speak Series
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("blog");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Blog
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("podcasts");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Podcasts
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("bespeaker");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Be A Speaker
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("bevolunteer");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          Be A Volunteer
        </p>
        <p
          className="link"
          onMouseEnter={() => {
            setBorder("aboutus");
            setOutlet(true);
          }}
          onMouseLeave={() => setOutlet(false)}
        >
          About Us
        </p>
      </div>
      <div className={outlet ? "outlet outlet-active" : "outlet"}>
        {border === "training" && <Training />}
        {border === "meeting" && <Meeting />}
        {border === "webinars" && <Webinars />}
        {border === "conference" && <Conference />}
        {border === "videos" && <Videos />}
        {border === "speak" && <SpeakSeries />}
        {border === "blog" && <Blog />}
        {border === "podcasts" && <Podcasts />}
        {border === "bespeaker" && <BeASpeaker />}
        {border === "bevolunteer" && <BeAVolunteer />}
        {border === "aboutus" && <AboutUs />}
      </div>
      <button className="send-btn">Send message</button>
    </header>
  );
};

export default Header;
