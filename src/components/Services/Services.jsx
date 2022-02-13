import { Laptop, Lock, ShoppingCart } from "@material-ui/icons";
import React from "react";
import "./service.scss";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="header">
        <span className="title">SERVICES</span>
        <span className="desc">Lorem ipsum dolor sit amet consectetur</span>
      </div>
      <div className="items">
        <div className="item">
          <div className="head">
            <ShoppingCart
              style={{
                fontSize: "60px",
                background: "#fed136",
                borderRadius: "60%",
                color: "white",
                padding: "20px",
              }}
            />
            <span>E-Commerece</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            porro id. Aliquam fugiat adipisci voluptatibus deserunt natus, quam
            modi!
          </div>
        </div>
        <div className="item">
          <div className="head">
            <Laptop
              style={{
                fontSize: "60px",
                background: "#fed136",
                borderRadius: "60%",
                color: "white",
                padding: "20px",
              }}
            />
            <span>Responsive Design</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            porro id. Aliquam fugiat adipisci voluptatibus deserunt natus, quam
            modi!
          </div>
        </div>
        <div className="item">
          <div className="head">
            <Lock
              style={{
                fontSize: "60px",
                background: "#fed136",
                borderRadius: "60%",
                color: "white",
                padding: "20px",
              }}
            />
            <span>Web Security</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            porro id. Aliquam fugiat adipisci voluptatibus deserunt natus, quam
            modi!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
