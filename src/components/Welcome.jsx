import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://login-and-register.herokuapp.com/user/${id}`)
      .then(({ data }) => setName(data.nombre))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={styles.welcome}>
      <h3>{name ? `¡Felicitaciones ${name}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
      <h2>{name ? "Te pudiste logear correctamente🎉" : "Te estamos viendo..."}</h2>
      <div className={styles.buttons}>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/")}>Register</button>
      </div>
    </div>
  );
};

export default Welcome;
