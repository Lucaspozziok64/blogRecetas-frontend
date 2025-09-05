const CaruselRecetas = () => {
  return (
    <div
      id="caruselImagenes"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/8804990/pexels-photo-8804990.jpeg"
            className="d-block w-100 imagenCarusel"
            alt="Imagen de celular con recetas"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/9004736/pexels-photo-9004736.jpeg"
            className="d-block w-100 imagenCarusel"
            alt="Imagen de plato con verduras"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.pexels.com/photos/10254480/pexels-photo-10254480.jpeg"
            className="d-block w-100 imagenCarusel"
            alt="Imagen de una mesa con merienda"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#caruselImagenes"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#caruselImagenes"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CaruselRecetas;
