import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-3 text-light">
      <div className="container">
        <div className="row justify-content-md-between gy-sm-3">
          <article className="col-12 col-md-12 col-lg-3 text-center text-md-start">
            <div className="d-flex gap-3 justify-content-sm-center justify-content-md-center justify-content-center">
              <img src="https://thumbs.dreamstime.com/b/dise%C3%B1o-gr%C3%A1fico-vectorial-del-libro-de-recetas-simple-creatividad-culinaria-explorar-nuestro-sencillo-logo-una-mezcla-simplicidad-321128647.jpg"
              className="img-fluid" width={150} />
            </div>
          </article>
          <article className="col-12 col-md-3 col-lg-3 text-center text-md-start gy-3">
            <h4>Recetas</h4>
            <h6>Blog</h6>
            <h6>Tipos</h6>
            <h6>Descripcion</h6>
          </article>
          <article className="col-12 col-md-3 col-lg-3 text-center text-md-start gy-3">
            <h4>Detalles</h4>
            <h6>Descripcion</h6>
            <h6>Ingredientes</h6>
            <h6>Imagen</h6>
          </article>
          <article className="col-12 col-md-3 col-lg-3 text-center text-md-start gy-3">
            <h4>Blog Recetas</h4>
            <h6>Sin costo</h6>
            <h6>Recetas unicas</h6>
            <h6>Contacto</h6>
          </article>
          <article className="col-12 text-center text-md-end gy-3">
            <h6>Seguinos en nuestras redes:</h6>
            <div className="text-light my-2">
              <i className="bi bi-instagram fs-1 mx-1 text-danger"></i>
              <i className="bi bi-facebook fs-1 mx-1 text-primary"></i>
              <i className="bi bi-twitter fs-1 mx-1 text-info"></i>
            </div>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
