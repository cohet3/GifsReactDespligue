import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";
import Pruebacss from "./components/Pruebacss";
import Camara from "./components/Camara";
import ClickPrinting from "./components/ClickPrinting";

import "./custom.css";
import CounterApp from "./components/Hook-App/01-useState/CounterApp";
import CounterWithCustomHook from "./components/Hook-App/01-useState/CounterWithCustomHook";
import { SimpleForm } from "./components/Hook-App/02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./components/Hook-App/02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./components/Hook-App/03-examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <GifExpertApp /> */}
    {/* <Pruebacss /> */}
    {/* <PruebaBou /> */}
    {/* <Camara /> */}
    {/* <ClickPrinting /> */}
    {/* <Hook />
    <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHooks />
  </>
);
