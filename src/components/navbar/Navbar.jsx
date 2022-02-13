import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Brand</span>
      </div>
      <div className="right">
        <a href="#services">
          <span>SERVICES</span>
        </a>
        <a href="#portfolio">
          <span>PORTFOLIO</span>
        </a>
        <a href="#about">
          <span>ABOUT US</span>
        </a>
        <a href="#team">
          <span>TEAM</span>
        </a>
        <a href="#contact">
          <span>CONTACT</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
