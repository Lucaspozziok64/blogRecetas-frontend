import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";
import Login from "./components/pages/Login";
import Menu from "./components/shared/Menu";
import Administrador from "./components/pages/Administrador";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import Formulariorecetas from "./components/pages/receta/FormularioReceta";
import { v4 as uuidv4 } from "uuid";

function App() {
  const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
  const [recetas, setRecetas] = useState(recetasLocalStorage);
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKey")) || false; // Se puede guardar con True o false
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  const crearRecetas = (recetaNueva)=> {
    //Agregar un id unico al producto nuevo
    recetaNueva.id = uuidv4();
    //agregar el prodcto al state de productos
    setRecetas([...recetas, recetaNueva])
    return true
  }

  useEffect(() => {
    localStorage.setItem("recetas", JSON.stringify(recetas));
  }, [recetas]);

  return (
    <>
      <BrowserRouter>
        <Menu usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin} />
        <Routes>
          <Route path="/" element={<Inicio recetas={recetas} />}></Route>
          <Route
            path="/administrador"
            element={<ProtectorAdmin isAdmin={usuarioAdmin} />}
          >
            <Route
              index
              element={
                <Administrador recetas={recetas} setRecetas={setRecetas} />
              }
            ></Route>
            <Route
              path="crear"
              element={
                <Formulariorecetas
                  titulo={"Crear receta"}
                  crearRecetas={crearRecetas}
                />
              }
            ></Route>
            <Route
              path="editar/:id"
              element={
                <Formulariorecetas
                  titulo={"Editar receta"}
                  setRecetas={setRecetas}
                  recetas={recetas}
                />
              }
            ></Route>
          </Route>
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
