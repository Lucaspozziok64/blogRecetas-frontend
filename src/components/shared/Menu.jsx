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
import { useForm } from "react-hook-form";
import { crearUsuario } from "../../helpers/queries";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const crearCuenta = async (usuario) => {
    const respuesta = await crearUsuario(usuario);
    if (respuesta?.status === 201) {
      Swal.fire({
        title: "Usuario creado",
        text: `El usuario ${usuario.nombreUsuario} fue creado correctamente.`,
        icon: "success",
      });
      reset();
    } else if (respuesta?.status === 400 || respuesta?.status === 409) {
      const mensajeError = await respuesta.json();
      Swal.fire({
        title: "Error al crear usuario",
        text: mensajeError.message || "El email ya está registrado.",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Error del servidor",
        text: "Ocurrió un problema inesperado. Intenta más tarde.",
        icon: "error",
      });
    }
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
      <Modal
        backdrop={"static"}
        className="colorFondoModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">
            Crea tu cuenta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(crearCuenta)}>
            <FormGroup className="mb-3" controlId="formNombreUsuario">
              <FormLabel>Nombre Usuario *</FormLabel>
              <FormControl
                type="text"
                placeholder="Ej: user1"
                maxLength={50}
                min={4}
                {...register("nombreUsuario", {
                  required: "El nombre de usuario es un dato obligatorio",
                  pattern: {
                    message:
                      "El nombre debe tener entre 8 y 16 caracteres, al menos un dígito",
                  },
                  minLength: {
                    value: 4,
                    message:
                      "El nombre del usuario debe tener almenos 4 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "El nombre del usuario debe tener almenos 4 caracteres",
                  },
                })}
              ></FormControl>
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formEmail">
              <FormLabel>Email *</FormLabel>
              <FormControl
                type="email"
                placeholder="Ej: usuario@gmail.com"
                maxLength={100}
                min={5}
                {...register("email", {
                  required: "El correo electrónico es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo electrónico debe tener un formato válido, por ejemplo juan2025@mail.com",
                  },
                })}
              ></FormControl>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formPassword">
              <FormLabel>Contraseña *</FormLabel>
              <FormControl
                type="password"
                placeholder="Ingresa una contraseña"
                maxLength={100}
                min={8}
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 100 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                  },
                })}
              ></FormControl>
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </FormGroup>
            <hr />
            <FormGroup className="text-end">
              <Button variant="success" type="submit">
                Crear cuenta
              </Button>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Menu;
