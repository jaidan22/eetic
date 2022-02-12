import React from "react";
import "./team.scss";
import TeamMem from "./TeamMem";
import pic1 from "../../img/team/1.jpg";
import pic2 from "../../img/team/2.jpg";
import pic3 from "../../img/team/3.jpg";

const Team = () => {
  return (
    <div className="team">
      <TeamMem img={pic1} name="Kay Garland" designation="Lead Designer" />
      <TeamMem img={pic2} name="Larry Parker" designation="Lead Marketer" />
      <TeamMem
        img={pic3}
        name="Dianna Pertersen"
        designation="Lead Developer"
      />
    </div>
  );
};

export default Team;
