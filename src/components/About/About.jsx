import React from "react";
import "./about.scss";
import { AboutItemL, AboutItemR } from "./AboutItem";
import pic1 from "../../img/about/1.jpg";
import pic2 from "../../img/about/2.jpg";
import pic3 from "../../img/about/3.jpg";
import pic4 from "../../img/about/4.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="heading">
        <h1>ABOUT</h1>
        <span>Lorem ipsum dolor sit amet consectetur</span>
      </div>

      <div className="items">
        <div className="vl"></div>
        <AboutItemL date="2009-2011" title="Our Humble Beginnings" img={pic1} />
        <AboutItemR date="March 2011" title="An Agency is born" img={pic2} />
        <AboutItemL
          date="December 2012"
          title="Transition to Full Service"
          img={pic3}
        />
        <AboutItemR date="July 2014" title="Phase Two Expansion" img={pic4} />
        <div className="last">Be Part Of Our Story</div>
      </div>
    </div>
  );
};

export default About;
