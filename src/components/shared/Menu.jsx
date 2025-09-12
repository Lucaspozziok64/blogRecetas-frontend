import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    Swal.fire({
      title: "Quieres Cerrar Sesion?",
      text: "cerraras sesion como admin, y entraras en vista como usuario!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarioAdmin({});
        navegacion("/");
        Swal.fire({
          title: "Sesion cerrada!",
          text: "Has cerrado sesion exitosamente, Estas en la vista de Usuario",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Navbar expand="lg" className="bg-black">
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
            <p className="mx-4 m-0 d-flex justify-content-center align-items-center">
              Blog de Recetas
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
              {usuarioAdmin.token ? (
                <>
                  <NavLink className="nav-link" to={"/administrador"}>
                    Administrador
                  </NavLink>
                  <Button className="nav-link w-25" onClick={logout}>
                    Cerrar Sesion
                  </Button>
                </>
              ) : (
                <>
                  <NavLink className="nav-link" to={"/login"}>
                    Login
                  </NavLink>
                  <Button
                    className="tinos nav-link boton-crea-cuenta"
                    onClick={handleShow}
                  >
                    Crea tu cuenta
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Crea tu cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup className="mb-3" controlId="formBasicNombreUsuario">
              <FormLabel>Nombre Usuario *</FormLabel>
              <FormControl type="text" placeholder="Ej: user1"></FormControl>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Email *</FormLabel>
              <FormControl
                type="email"
                placeholder="Ej: usuario@gmail.com"
                maxLength={100}
                min={5}
              ></FormControl>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Contraseña *</FormLabel>
              <FormControl
                type="password"
                placeholder="Ingresa una contraseña"
                maxLength={16}
                min={8}
              ></FormControl>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Crear cuenta
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Menu;
