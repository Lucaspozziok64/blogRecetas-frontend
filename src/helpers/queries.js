const urlRecetas = import.meta.env.VITE_API_RECETAS;
const urlUsuarios = import.meta.env.VITE_API_USUARIOS;

console.log(urlRecetas);
console.log(urlUsuarios);

export const leerRecetas = async () => {
  try {
    const respuesta = await fetch(urlRecetas);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerRecetasPorId = async (id) => {
  try {
    const respuesta = await fetch(urlRecetas + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearRecetas = async (recetaNueva) => {
  try {
    const respuesta = await fetch(urlRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarRecetas = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(urlRecetas + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarRecetaPorId = async (id) => {
  try {
    const respuesta = await fetch(urlRecetas + `/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (dataUsuario) => {
  try {
    const respuesta = await fetch(urlUsuarios + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUsuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
