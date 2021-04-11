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
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00"
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