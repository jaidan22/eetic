import "./app.scss";
import About from "./components/About/About";
import Clients from "./components/clients/Clients";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Team from "./components/team/Team";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Clients />
    </>
  );
};

export default App;
