import { Button, Table } from "react-bootstrap";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemRecetas from "./componentsAdministrador/ItemRecetas";
import { useEffect, useState } from "react";
import { leerRecetas } from "../../helpers/queries";

const Administrador = ({ recetas, borrarReceta }) => {
  const [listaRecetas, setListaRecetas] = useState([]);

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
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Recetas disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus mx-1"></i>
            Agregar
          </Link>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaRecetas.map((receta, indice) => (
            <ItemRecetas
              key={receta._id}
              fila={indice + 1}
              receta={receta}
              borrarReceta={() => borrarReceta(receta.id)}
              setListaRecetas={setListaRecetas}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
