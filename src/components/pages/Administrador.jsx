import { Button, Table } from "react-bootstrap";
import { defaultRecipes } from "../../data/datosPrueba";
import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const Administrador = () => {
  const cargarProductosPrueba = () => {
    //cargar datos de prueba
    setProductos(defaultRecipes);
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus mx-1"></i>
            Agregar
          </Link>
          <Button
            className="btn btn-info ms-2 text-light"
            onClick={cargarProductosPrueba}
          >
            <i className="bi bi-database-fill-add"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
