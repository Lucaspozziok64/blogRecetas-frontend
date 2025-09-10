const urlRecetas = import.meta.env.VITE_API_RECETAS;

console.log(urlRecetas);

export const leerrecetas = async () => {
    try {
        const respuesta = await fetch(urlRecetas)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const obtenerRecetasPorId = async (id) => {
    try {
        const respuesta = await fetch(urlRecetas + `/${id}`)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const crearRecetas = async (recetaNueva) => {
    try {
        const respuesta = await fetch(urlRecetas, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recetaNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const editarRecetas = async (recetaEditada, id) => {
    try {
        const respuesta = await fetch(urlRecetas + `/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recetaEditada)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const borrarRecetaPorId = async (id) => {
    try {
        const respuesta = await fetch(urlRecetas + `/${id}`, {
            method: 'DELETE',
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}