import Titulo from "./Titulo";
import { defaultRecipes } from "../../data/datosPrueba";
import { useEffect } from "react";

const Inicio = ({ recetas}) => {

  useEffect(()=> {
    const datos = localStorage.getItem('recetas');
    if(!datos) localStorage.setItem('recetas', JSON.stringify(defaultRecipes));
  }, []);

  return (
    <main className="container my-5">
      <Titulo />
      <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mx-2">
        <div>
        {recetas.map((receta, index) => (
          <div key={index} className="card">
            <img src={receta.imagen} alt={receta.titulo} />
            <h3>{receta.titulo}</h3>
            <p>{receta.descripcion}</p>
            <p>{receta.pasos}</p>
            <button onClick={() => eliminarReceta(index)}>Ver mas</button>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
};

export default Inicio;
