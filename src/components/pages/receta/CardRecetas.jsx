import { Link } from "react-router";

const CardRecetas = ({ receta }) => (
  <div className="card">
    <img src={receta.imagen} alt={receta.nombreReceta} className="my-1" />
    <h3>{receta.nombreReceta}</h3>
    <p>{receta.descripcion}</p>
    <p>{receta.categoria}</p>
    <Link className="mb-2 bg-success text-center text-light text-decoration-none" to={`/detalle/${receta._id}`}>Ver detalles</Link>
  </div>
);

export default CardRecetas;