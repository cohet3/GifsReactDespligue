import { useLayoutEffect, useRef } from "react";
import { useFetch } from "../../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  //   const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  const { id } = data?.[0] || {};

  // implementacion del useLayoutEffect

  const pRef = useRef();

  useLayoutEffect(() => {
    const element = document.getElementById("someElementId");
    console.log(element);
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log(rect);
      // Do something with the 'rect' object or any other operations you need.
    } else {
      // Handle the case where 'element' is not found in the DOM.
    }
    // const rect = pRef.current.getBoundingClientRect();
  }, []);

  //   console.log(data);
  //   console.log(id, name);
  // console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Rick And Morty , Personajes </h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{data.id}</p>
          <img
            src={data.image}
            alt="Foto de los personajes de Rick and Morty"
            className="img-fluid-right"
            style={{ display: "flex", alignItems: "center", margin: "auto" }}
          />

          <footer>
            <p
              ref={pRef}
              className="blockquote text-end"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "auto",
                justifyItems: "center",
              }}
            ></p>
            <p
              className="text-end mb-1"
              style={{ display: "flex", alignItems: "end", margin: "auto" }}
            >
              Especie: {data.species}
            </p>
          </footer>
        </blockquote>
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};
