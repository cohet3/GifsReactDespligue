import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "terminator",
    email: "terminator@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("useEfect inicial regargue de pagina");
  }, []);
  useEffect(() => {
    // console.log("formState changed");
  }, [formState]);
  useEffect(() => {
    // console.log("email changed");
  }, [email]);
  useEffect(() => {
    // console.log("username");
  }, [username]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="danny@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "terminator" && <Message />}
    </>
  );
};
