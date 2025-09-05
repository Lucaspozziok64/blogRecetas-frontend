import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Administracion = ({ recetas, setRecetas, formData, setFormData }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaReceta = {
      ...formData,
      ingredientes: formData.ingredientes.split(","),  
      pasos: formData.pasos.split(","),
    };
    const modificar = [...recetas, nuevaReceta];
    setRecetas(modificar);
    localStorage.setItem("recetas", JSON.stringify(modificar));
    Swal.fire("Receta agregada", "", "success");
    setFormData({
      titulo: "",
      descripcion: "",
      imagen: "",
      ingredientes: "",
      pasos: "",
    });
  };

  const eliminarReceta = (index) => {
    const modificar = recetas.filter((_, i) => i !== index);
    setRecetas(modificar);
    localStorage.setItem("recetas", JSON.stringify(modificar));
    Swal.fire("Receta eliminada", "", "info");
  };

  return (
    <div className="container my-5">
      <h2>Administrador de Recetas</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
          required
        />
        <input
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({ ...formData, descripcion: e.target.value })
          }
          required
        />
        <input
          placeholder="URL de imagen"
          value={formData.imagen}
          onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
        />
        <input
          placeholder="Ingredientes separados por coma"
          value={formData.ingredientes}
          onChange={(e) =>
            setFormData({ ...formData, ingredientes: e.target.value })
          }
        />
        <input
          placeholder="Pasos separados por coma"
          value={formData.pasos}
          onChange={(e) => setFormData({ ...formData, pasos: e.target.value })}
        />
        <button type="submit">Agregar receta</button>
      </form>
    </div>
  );
};

export default Administracion;
