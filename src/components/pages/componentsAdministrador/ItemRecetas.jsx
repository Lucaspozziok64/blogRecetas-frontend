import { Button } from "react-bootstrap";
import { Link } from "react-router";
import { borrarRecetaPorId, leerRecetas } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemRecetas = ({ receta, fila, borrarReceta, setListaRecetas }) => {
  const eliminarReceta = () => {
    Swal.fire({
      title: "Eliminar Receta",
      text: "No puedes revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#146c43",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Aqui borro efectivamente el
        const respuesta = await borrarRecetaPorId(receta._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta ${receta.nombreReceta} fue eliminada correctamente`,
            icon: "success",
          }); //Luego debo actualizar la tabla de productos
          const respuestaRecetas = await leerRecetas();
          const recetasActualizadas = await respuestaRecetas.json();
          setListaRecetas(recetasActualizadas);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta ${receta.nombreReceta} no pudo ser eliminada`,
            icon: "error",
          });
        }
      }
    });
  };

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
        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemRecetas;
