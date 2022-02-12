import "./app.scss";
import About from "./components/About/About";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

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
      <Contact />
      <Footer />
    </>
  );
};

export default App;
