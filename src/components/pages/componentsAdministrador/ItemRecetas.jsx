import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemRecetas = ({ receta, fila, borrarReceta }) => {
  return (
    <tr>
      <th className="text-center">{fila}</th>
      <td className="text-center">{receta.nombreReceta}</td>
      <td className="text-center">
        <img src={receta.imagen} className="img-thumbnail"></img>
      </td>
      <td className="text-center">{receta.categoria}</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning"
          to={`/administrador/editar/` + receta._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemRecetas;
