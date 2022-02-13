import React from "react";
import "./portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import pic1 from "../../img/portfolio/1-thumbnail.jpg";
import pic2 from "../../img/portfolio/2-thumbnail.jpg";
import pic3 from "../../img/portfolio/3-thumbnail.jpg";
import pic4 from "../../img/portfolio/4-thumbnail.jpg";
import pic5 from "../../img/portfolio/5-thumbnail.jpg";
import pic6 from "../../img/portfolio/6-thumbnail.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="heading">
        <h1>PORTFOLIO</h1>
        <span>Lorem ipsum dolor sit amet consectetur</span>
      </div>
      <div className="cards">
        <PortfolioItem title="Threads" desc="Illustration" img={pic1} />
        <PortfolioItem title="Explore" desc="Graphic Design" img={pic2} />
        <PortfolioItem title="Finish" desc="Identity" img={pic3} />
        <PortfolioItem title="Lines" desc="Branding" img={pic4} />
        <PortfolioItem title="Southwest" desc="Website Design" img={pic5} />
        <PortfolioItem title="Window" desc="Photography" img={pic6} />
      </div>
    </div>
  );
};

export default Portfolio;
