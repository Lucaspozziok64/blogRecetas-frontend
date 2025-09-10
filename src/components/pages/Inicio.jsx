import Titulo from "./Titulo";
import { defaultRecipes } from "../../data/datosPrueba";
import { useEffect } from "react";
import CaruselRecetas from "./componentsInicio/CaruselRecetas";
import CardRecetas from "./receta/CardRecetas";

const Inicio = ({ recetas }) => {

  useEffect(() => {
    const datos = localStorage.getItem("blogRecetas");
    if (!datos) localStorage.setItem("blogRecetas", JSON.stringify(defaultRecipes));
  }, []);

  return (
    <main>
      <CaruselRecetas />
      <Titulo />
      <section className="container border border-success bg-gradient">
        <div>
          <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gap-2">
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
