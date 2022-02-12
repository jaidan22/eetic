import React from "react";
import "./PortfolioItem.scss";

const PortfolioItem = ({ title, desc, img }) => {
  return (
    <div className="item">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <span>{desc}</span>
    </div>
  );
};

export default PortfolioItem;
