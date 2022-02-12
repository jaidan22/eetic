import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Brand</span>
      </div>
      <div className="right">
        <span>SERVICES</span>
        <span>PORTFOLIO</span>
        <span>ABOUT US</span>
        <span>TEAM</span>
        <span>CONTACT</span>
      </div>
    </div>
  );
};

export default Navbar;
