import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import Contact from './components/Contact';
import Resume from "./components/Resume"

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 9,
                color: "#ffffff"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </>
  )
}

export default App;
