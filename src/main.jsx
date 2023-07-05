import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";
import Pruebacss from "./components/Pruebacss";
import Camara from "./components/Camara";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GifExpertApp /> */}
    {/* <Pruebacss /> */}
    {/* <PruebaBou /> */}
    <Camara />
  </React.StrictMode>
);
