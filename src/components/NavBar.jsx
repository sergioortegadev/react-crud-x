import { Link } from "react-router-dom";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const NavBar = () => {
  const { openNav } = useContext(NavContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="nav-link" activeclassname="active" onClick={(e) => openNav("home")}>
            <img src="./src/assets/logo.png" alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" activeclassname="active" onClick={(e) => openNav("home")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeclassname="active" onClick={(e) => openNav("table")}>
                  Base Datos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" activeclassname="active" onClick={(e) => openNav("home")}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link disabled" activeclassname="active" onClick={(e) => openNav("home")}>
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
