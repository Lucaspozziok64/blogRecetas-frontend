const RecipeCard = ({ receta }) => (
  <div className="card">
    <img src={receta.imagen} alt={receta.titulo} />
    <h3>{receta.titulo}</h3>
    <p>{receta.descripcion}</p>
    <p>{receta.categoria}</p>
    <p>{receta.pasos}</p>
  </div>
);

export default RecipeCard;