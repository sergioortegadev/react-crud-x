import CrudApp from "./CrudApp";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const Home = () => {
  // NAV-Buttons through useContext
  const { openForm, openFormEdit, openTable } = useContext(NavContext);

  return (
    <>
      <main className="home-main">
        <div className="up-the-fold">
          <img src="./src/assets/001.jpg" alt="banner" />
        </div>
        <div className="otro-div">
          <CrudApp openForm={openForm} openFormEdit={openFormEdit} openTable={openTable} />
          <div className="main-text">
            <h3>Bienvenidos al sistema de gestión</h3>
            <h4>Ingresar en menú Base de Datos. </h4>
            <h4>Para acceder a los contenidos, modificarlos y crear nuevos</h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
