import { useFetch } from "../../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  const { id, name } = !!data && data[0];
  console.log(data);
  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Pokemon GO GO GO GO Go Go Go </h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{id}</p>

          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary">Next quote</button>
    </>
  );
};
