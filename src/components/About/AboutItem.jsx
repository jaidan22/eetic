import React from "react";
import "./aboutItem.scss";

const AboutItemL = ({ date, title, img }) => {
  return (
    <div className="about-item itemL">
      <div className="content contentL">
        <h2>{date}</h2>
        <h2>{title}</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          eveniet rerum ipsam non repellendus eius magni quos temporibus
          reiciendis velit ipsum nobis eligendi, in, consectetur vitae! Itaque
          repellendus consequuntur eligendi.
        </span>
      </div>
      <img src={img} alt={title} />
    </div>
  );
};

const AboutItemR = ({ date, title, img }) => {
  return (
    <div className="about-item itemR">
      <img src={img} alt={title} />
      <div className="content contentR">
        <h2>{date}</h2>
        <h2>{title}</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          eveniet rerum ipsam non repellendus eius magni quos temporibus
          reiciendis velit ipsum nobis eligendi, in, consectetur vitae! Itaque
          repellendus consequuntur eligendi.
        </span>
      </div>
    </div>
  );
};

export { AboutItemL, AboutItemR };
