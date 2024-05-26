//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Semaforo from "./component/home.jsx";

//render your react application
ReactDOM.render(<Semaforo />, document.querySelector("#app"));
// src/App.js


import Semaforo from './Semaforo';

const App = () => {
  return (
    <div className="App">
      <h1>Semáforo</h1>
      <Semaforo />
    </div>
  );
};

export default App;