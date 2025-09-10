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
import Swal from "sweetalert2";
import DetalleReceta from "./components/pages/DetalleReceta";
import Footer from "./components/shared/Footer";

function App() {
  const recetasLocalStorage =
    JSON.parse(localStorage.getItem("blogRecetas")) || [];
  const [recetas, setRecetas] = useState(recetasLocalStorage);
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKey")) || false; // Se puede guardar con True o false
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  const crearRecetas = (recetaNueva) => {
    //Agregar un id unico al producto nuevo
    recetaNueva.id = uuidv4();
    //agregar el prodcto al state de productos
    setRecetas([...recetas, recetaNueva]);
  };

  useEffect(() => {
    localStorage.setItem("blogRecetas", JSON.stringify(recetas));
  }, [recetas]);

  const borrarReceta = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar esta receta?",
      text: "No podras revertir la tarjeta!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setRecetas(recetas.filter((receta) => receta.id !== id));
        Swal.fire({
          title: "Receta eliminada!",
          text: "Has eliminada la receta",
          icon: "success",
        });
      }
    });
  };

  const editarReceta = (recetaEditada) => {
  const recetasActualizadas = recetas.map((receta) =>
    receta.id === recetaEditada.id ? recetaEditada : receta
  );

  setRecetas(recetasActualizadas);
  localStorage.setItem("blogRecetas", JSON.stringify(recetasActualizadas));
};

  return (
    <>
      <BrowserRouter>
        <Menu usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin} />
        <Routes>
          <Route path="/" element={<Inicio recetas={recetas} />}></Route>
          <Route
            path="/detalle"
            element={
              <DetalleReceta
                recetas={recetas}
                setRecetas={setRecetas}
              />
            }
          ></Route>
          <Route
            path="/administrador"
            element={<ProtectorAdmin isAdmin={usuarioAdmin} />}
          >
            <Route
              index
              element={
                <Administrador
                  recetas={recetas}
                  setRecetas={setRecetas}
                  borrarReceta={borrarReceta}
                />
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
                  editarReceta={editarReceta}
                />
              }
            ></Route>
          </Route>
          <Route
            path="/login"
            element={<Login setUsuarioAdmin={setUsuarioAdmin} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
