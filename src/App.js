import React, {useState, useEffect} from "react";
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
import ReactLoading from "react-loading";

function App() {
  const [done, setDone] = useState(undefined);

  const [containerActive, setContainerActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setContainerActive(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 900) {
        setContainerActive(true);
      } else {
        setContainerActive(false);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setDone(true);
        });
    }, 2000);
  }, []);

  const createContainer = () => {
    return (
      <>
        {!done ? (
          <ReactLoading
            type={"spokes"}
            color={"#DF9B3A"}
            height={100}
            width={100}
            className="loading"
          />
        ) : (
          <>
            <div style={{position: "absolute", zIndex: "-1"}}>
            </div>
                    <Navbar />
                    <Hero />
                    <AboutMe />
                    <Experience />
                    <Portfolio />
                    <Contact />
                    <Footer />
          </>
        )}
      </>
    );
  };

  const destroyContainer = () => {
    return (
      <>
        {!done ? (
          <ReactLoading
            type={"spokes"}
            color={"#DF9B3A"}
            height={100}
            width={100}
            className="loading"
          />
        ) : (
          <>
            <div style={{position: "absolute", zIndex: "-1"}}>
              <Particles
                height="180vw"
                width="100vw"
                params={{
                  particles: {
                    number: {
                      value: 450,
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
                  </Container>
                </Container>
              </Container>
            </Container>
          </>
        )}
       </>
    );
  };

  const Main = containerActive ? createContainer() : destroyContainer()

  return (
    <div className="App">
      {Main}
    </div>
  );
}

export default App;