import { Button, Table } from "react-bootstrap";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemRecetas from "./componentsAdministrador/ItemRecetas";
import { defaultRecipes } from "../../data/datosPrueba";

const Administrador = ({ recetas, borrarReceta }) => {
  
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Recetas disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus mx-1"></i>
            Agregar
          </Link>
          <Button className="btn btn-info ms-2 text-light">
            <i className="bi bi-database-fill-add"></i>
          </Button>
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
          {recetas.map((receta, indice) => (
            <ItemRecetas
              key={receta.id}
              fila={indice + 1}
              receta={receta}
              borrarReceta={() => borrarReceta(receta.id)}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
