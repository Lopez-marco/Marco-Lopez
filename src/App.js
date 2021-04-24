import "./App.css";
import { useQuery } from "react-query";
import Container from "@material-ui/core/Container";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div style={{ position: "absolute", zIndex: "-1" }}>
        <Particles height="100vh" width="100vw"  params={{
	    "particles": {
	        "number": {
	            "value": 150
	        },
	        "size": {
	            "value": 5
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "repulse"
	            }
	        }
	    }
	}}/>
      </div>
      <Container fixed>
      <Container fixed>
      <Container fixed>
      <Container fixed>
        <Navbar />
        <Hero />
      </Container>
      </Container>
      </Container>
      </Container>
    </div>
  );
}

export default App;
