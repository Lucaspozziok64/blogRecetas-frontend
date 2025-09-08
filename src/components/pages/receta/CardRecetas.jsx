const CardRecetas = ({ receta }) => (
  <div className="card">
    <img src={receta.imagen} alt={receta.titulo} />
    <h3>{receta.titulo}</h3>
    <p>{receta.descripcion}</p>
    <p>{receta.categoria}</p>
    <button className="mb-2 bg-success">Ver detalles</button>
  </div>
);

export default CardRecetas;