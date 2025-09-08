import Titulo from "./Titulo";
import { defaultRecipes } from "../../data/datosPrueba";
import { useEffect } from "react";
import CaruselRecetas from "./componentsInicio/CaruselRecetas";
import CardRecetas from "./receta/CardRecetas";

const Inicio = ({ recetas }) => {

  useEffect(() => {
    const datos = localStorage.getItem("recetas");
    if (!datos) localStorage.setItem("recetas", JSON.stringify(defaultRecipes));
  }, []);

  return (
    <main>
      <CaruselRecetas />
      <Titulo />
      <section className="container">
        <div>
          <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {recetas.map((receta) => (
              <CardRecetas key={receta.id} receta={receta} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
