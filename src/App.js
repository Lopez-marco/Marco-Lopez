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
  // const [setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          // setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <div className="App">
      {!done ? (
        <ReactLoading type={"spokes"} color={"#DF9B3A"} height={100} width={100} className="loading"/>
      ) : (
        <>
          <div style={{position: "absolute", zIndex: "-1"}}>
            <Particles
              height="480vh"
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

      {/* <div style={{position: "absolute", zIndex: "-1"}}>
        <Particles
          height="480vh"
          width="100vw"
          params={{
            particles: {
              number: {
                value: 350,
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
      </Container> */}
    </div>
  );
}

export default App;
