import "./App.css";
import Container from "@material-ui/core/Container";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import GotoTop from "./components/GotoTop";

function App() {
  return (
    <div className="App">
      <div style={{position: "absolute", zIndex: "-1"}}>
        <Particles
          height="450vh"
          width="100vw"
          params={{
            particles: {
              number: {
                value: 250,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
      <Container fixed>
        <Container fixed>
          <Container fixed>
            <Container fixed>
              <Navbar />
              <Hero />
              <AboutMe />
              <Experience />
              <Portfolio />
              <Contact />
              <Footer />
              <GotoTop />
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
