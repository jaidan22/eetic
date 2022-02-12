import React from "react";
import "./clients.scss";
import pic1 from "../../img/clients/creative-market.jpg";
import pic2 from "../../img/clients/designmodo.jpg";
import pic3 from "../../img/clients/envato.jpg";
import pic4 from "../../img/clients/themeforest.jpg";

const Clients = () => {
  return (
    <div className="clients">
      <img src={pic1} alt="" />
      <img src={pic2} alt="" />
      <img src={pic3} alt="" />
      <img src={pic4} alt="" />
    </div>
  );
};

export default Clients;
