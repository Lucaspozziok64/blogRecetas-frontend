import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Inicio from "./components/Inicio";
import Administracion from "./components/pages/Administracion";
import { useEffect, useState } from "react";
import Login from "./components/Login";

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
        <NavBar usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin} />
        <Routes>
          <Route path="/" element={<Inicio recetas={recetas} />}></Route>
          <Route
            path="/administrador"
            element={
              <Administracion
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
