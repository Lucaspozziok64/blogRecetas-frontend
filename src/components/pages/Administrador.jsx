import { Button, Table } from "react-bootstrap";
import { defaultRecipes } from "../../data/datosPrueba";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const Administrador = ({ recetas, setRecetas }) => {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
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
          {recetas.map((receta, index) => (
            <tr key={index}>
              <th scope="row">1</th>
              <td>{receta.titulo}</td>
              <td className="text-center">
                <img src={receta.imagen}></img>
              </td>
              <td>{receta.categoria}</td>
              <td className="text-center">
                <Link
                  className="me-lg-2 btn btn-warning"
                  to={"/administrador/editar/"}
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
