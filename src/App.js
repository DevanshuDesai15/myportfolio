import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from "./components/navBar";
import Header from "./components/header";
import i1 from "./android.svg"
import AboutMe from "./components/about";

function App() {
  return (
    <>
	<Particles
        params={{
          particles:{
            number:{
              value:50,
              density:{
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: "circle",
              stroke: {
                width: 6,
                color: "#e68d09"
              }
            },
          },
		  interactivity:{
			  events:{
				  onhover:{
					  enable: true,
					  mode: "push"
				  }
			  }
		  }
        }}
      />
	<NavBar/>
    <Header/>
	<AboutMe />
	</>  
	);
}
  

export default App;
