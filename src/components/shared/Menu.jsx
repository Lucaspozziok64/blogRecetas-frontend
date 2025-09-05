import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioAdmin(false);
    sessionStorage.removeItem("userKey");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={
              "https://thumbs.dreamstime.com/b/dise%C3%B1o-gr%C3%A1fico-vectorial-del-libro-de-recetas-simple-creatividad-culinaria-explorar-nuestro-sencillo-logo-una-mezcla-simplicidad-321128647.jpg"
            }
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={40}
          />
          <p className="mx-4 m-0 d-flex justify-content-center align-items-center">Blog de Recetas</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioAdmin ? (
              <>
                <NavLink className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button className="nav-link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
