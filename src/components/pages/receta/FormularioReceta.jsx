import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router";
import { crearRecetas, editarRecetas, obtenerRecetasPorId } from "../../../helpers/queries";

const Formulariorecetas = ({
  titulo,
  setRecetas,
  recetas,
  editarReceta,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerReceta()
  }, [titulo, id, recetas]);

  const obtenerReceta = async () => {
    if (titulo === "Editar receta" && id) {
      const respuesta = await obtenerRecetasPorId(id);
      if (respuesta.status === 200) {
        const recetaBuscada = await respuesta.json();
        setValue("nombreReceta", recetaBuscada.nombreReceta);
        setValue("imagen", recetaBuscada.imagen);
        setValue("categoria", recetaBuscada.categoria);
        setValue("descripcion", recetaBuscada.descripcion);
        setValue("pasos", recetaBuscada.pasos);
      }
    }
  };

  const onSubmit = async (receta) => {
    if (titulo === "Crear receta") {
      console.log(receta)

      const respuesta = await crearRecetas(receta)
      if(respuesta.status === 201) {
        reset();
        Swal.fire({
          title: "Receta creada",
          text: `La receta ${receta.nombreReceta} fue creada correctamente.`,
          icon: "success",
        });
        reset();
      }

    } else {
      if (titulo === "Editar receta") {
        const respuesta = await editarRecetas(receta, id)
        if(respuesta.status === 200) {
          Swal.fire({
            title: "Receta actualizada",
            text: `La receta ${receta.nombreReceta} fue actualizada correctamente.`,
            icon: "success",
          });
          reset();
        }
        navegacion("/administrador");
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Ensalada Rusa"
            {...register("nombreReceta", {
              required: "El nombre de la receta es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la receta debe tener almenos 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre de la receta debe tener como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.inputTitulo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                message:
                  "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.inputImagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Comida">Comida</option>
            <option value="Pasteles">Pasteles</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.inputCategoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Un pastafrola dulce y rica"
            as="textarea"
            {...register("descripcion", {
              required: "La descripción breve es un dato obligatorio",
              minLength: {
                value: 5,
                message: "La descrición breve debe tener almenos 5 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "La descrición breve debe tener como máximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Pasos*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Hervir agua, pelar papas, etc"
            as="textarea"
            rows={4}
            {...register("pasos", {
              required: "Los pasos es un dato obligatorio",
              minLength: {
                value: 10,
                message: "Los pasos debe tener almenos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Los pasos debe tener como máximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.pasos?.message}</Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
        <Link className="btn btn-danger mx-2" to={"/administrador"}>
          Cancelar
        </Link>
      </Form>
    </section>
  );
};

export default Formulariorecetas;
