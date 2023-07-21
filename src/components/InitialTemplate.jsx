import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const InitialTemplate = () => {
  const { openNav } = useContext(NavContext);

  const [count, setCount] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Mi Mundo Dev</h2>
        <img
          src="https://sergioortega.com.ar/assets/perfil.jpg"
          alt="foto"
          style={{ width: "300px", height: "auto" }}
        />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          Experiencia: {count} {count === 1 ? "año" : "años"}
        </button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar años de experiencia
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            if (count > 0) {
              setCount((count) => count - 1);
            } else
              alert(
                "PARAAA!!! no se puede restar años cuando estás en cero ja ja 🤣"
              );
          }}
        >
          Aprete y descontará
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button className="nav-btn" onClick={(e) => openNav("home")}>
        <Link to="/">Home</Link>
      </button>
    </>
  );
};

export default InitialTemplate;
