import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from "./components/navBar";
import Header from "./components/header";

function App() {
  return (
    <>
      <Particles
        params={{
          particles:{
            number:{
              value:30,
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
          }
        }}
      />
      <NavBar/>
      <Header/>
    </>
  );
}

export default App;

//   <Particles
  //   params={{
	//     "particles": {
	//         "number": {
	//             "value": 8,
	//             "density": {
	//                 "enable": true,
	//                 "value_area": 800
	//             }
	//         },
	//         "line_linked": {
	//             "enable": false
	//         },
	//         "move": {
	//             "speed": 1,
	//             "out_mode": "out"
	//         },
	//         "shape": {
	//             "type": [
	//                 "image",
	//                 "square"
	//             ],
	//             "image": [
	//                 {
	//                     "src": "/react.cd2ab268.svg",
	//                     "height": 20,
	//                     "width": 23
	//                 },
	//                 {
	//                     "src": "/k8s.2d579d24.svg",
	//                     "height": 20,
	//                     "width": 20
	//                 },
	//                 {
	//                     "src": "/code.b3b4c4f4.png",
	//                     "height": 20,
	//                     "width": 20
	//                 }
	//             ]
	//         },
	//         "color": {
	//             "value": "#CCC"
	//         },
	//         "size": {
	//             "value": 30,
	//             "random": false,
	//             "anim": {
	//                 "enable": true,
	//                 "speed": 4,
	//                 "size_min": 10,
	//                 "sync": false
	//             }
	//         }
	//     },
	//     "retina_detect": false
	// }} />