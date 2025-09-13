import { Link } from "react-router";

const RutaProtegidaAdmin = ({ isAdmin, children }) => {
  return isAdmin?.token ? (
    children
  ) : (
    <div className="text-center mt-5">
      <h2>No tienes permiso para ver esta receta 😢</h2>
      <Link to="/login" className="btn btn-primary mt-3">
        Iniciar sesión
      </Link>
    </div>
  );
};

export default RutaProtegidaAdmin;
