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
import PruebaBou from "./components/PruebaBou";
import { FocusScreem } from "./components/Hook-App/04-useRef/FocusScreem";
import { Layout } from "./components/Hook-App/05-useLayoutEffect/Layout";
import { Memorize } from "./components/Hook-App/06-memos/Memorize";
import { MemoHook } from "./components/Hook-App/06-memos/MemoHook";
import { CallbackHook } from "./components/Hook-App/06-memos/CallbackHook";
import { Padre } from "./components/Hook-App/07-tarea-memo/Padre";
import "./components/Hook-App/08-useReducer/intro-reducer";
import { TodoApp } from "./components/Hook-App/08-useReducer/TodoApp";

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
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreem />  */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    <TodoApp />
  </>
);
