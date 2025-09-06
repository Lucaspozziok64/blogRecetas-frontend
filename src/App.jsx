import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";
import Login from "./components/pages/Login";
import Menu from "./components/shared/Menu";
import Administrador from "./components/pages/Administrador";

function App() {
  const [recetas, setRecetas] = useState([]);
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKey")) || false; // Se puede guardar con True o false
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    ingredientes: "",
    pasos: "",
  });

  useEffect(() => {
    const recetas = JSON.parse(localStorage.getItem("recetas")) || [];
    setRecetas(recetas);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Menu usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin} />
        <Routes>
          <Route path="/" element={<Inicio recetas={recetas} />}></Route>
          <Route
            path="/administrador"
            element={
              <Administrador
                recetas={recetas}
                setRecetas={setRecetas}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setUsuarioAdmin={setUsuarioAdmin} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
