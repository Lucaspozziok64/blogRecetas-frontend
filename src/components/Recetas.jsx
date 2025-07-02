const Recetas = () => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Nombre receta</h5>
        <p className="card-text">
          breve descripcion
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Primer lista</li>
        <li className="list-group-item">Segunda lista</li>
        <li className="list-group-item">tercera Lista</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Ver receta
        </a>
      </div>
    </div>
  );
};

export default Recetas;
