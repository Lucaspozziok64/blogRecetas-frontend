import Titulo from "./Titulo";
import { defaultRecipes } from "../../data/datosPrueba";
import { useEffect } from "react";
import CaruselRecetas from "./componentsInicio/CaruselRecetas";

const Inicio = ({ recetas }) => {
  useEffect(() => {
    const datos = localStorage.getItem("recetas");
    if (!datos) localStorage.setItem("recetas", JSON.stringify(defaultRecipes));
  }, []);

  return (
    <main>
      <CaruselRecetas />
      <section className="container">
        <Titulo />
        <div>
          <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
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
      </section>
    </main>
  );
};

export default Inicio;
