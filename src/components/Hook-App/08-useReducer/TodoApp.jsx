import React, { useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    desciption: "recolectar la piedra del alama",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    desciption: "recolectar la piedra del alama",
    done: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <ul>
        <li>Item 1 </li>
        <li>Item 2 </li>
        <li>Item 3 </li>
      </ul>
    </>
  );
};
