import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //componente montado
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      //componente desmontado
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>usuario ya existe</h3>
    </>
  );
};
