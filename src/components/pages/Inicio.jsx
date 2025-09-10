import Titulo from "./Titulo";
import { useEffect, useState } from "react";
import CaruselRecetas from "./componentsInicio/CaruselRecetas";
import CardRecetas from "./receta/CardRecetas";
import { leerRecetas } from "../../helpers/queries";

const Inicio = ({ recetas }) => {
  const [listaRecetas, setListaRecetas] = useState([])

    useEffect(()=> {
      obtenterRecetas();
    }, [])
  
    const obtenterRecetas = async ()=> {
      const respuesta = await leerRecetas()
      if(respuesta.status === 200) {
        const datos = await respuesta.json();
        setListaRecetas(datos);
      } else {
        console.log('Ocurrio un error al intentar leer las recetas')
      }
    }

  return (
    <>
      <CaruselRecetas />
      <Titulo />
      <section className="container border border-success bg-gradient">
        <div>
          <h4 className="text-white text-center my-3">
            {
              listaRecetas.length === 0 ? 'Lo sentimos, no hay recetas aún 😔' : 'Mire las recetas aqui 👇😎'
            }
          </h4>
          <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-gap-2">
            {listaRecetas.map((receta) => (
              <CardRecetas key={receta.id} receta={receta} />
            ))}
          </div>
        </div>
      </section>
         <h4 className="text-white text-center my-3">
          {listaRecetas.length === 0 ? "" : " Si llegaste hasta aqui agradecemos mucho su visita🥰🤩"}
        </h4>
    </>
  );
};

export default Inicio;
