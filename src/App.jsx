import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import { NavProvider } from "./context/NavContext";

function App() {
  return (
    <>
      <NavProvider>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </NavProvider>
    </>
  );
}

export default App;
