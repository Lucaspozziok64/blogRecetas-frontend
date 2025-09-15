🍳 Blog de Recetas - React + Vite
- 
Aplicación web full-stack de un blog de recetas con funcionalidades CRUD, autenticación y diseño responsive.

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)

![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)

![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat)

![Netlify]( https://img.shields.io/badge/Deploy-Netlify-teal)

####
🌟 Características principales
- 
🎨 Frontend

- Carousel dinámico en página de inicio
- Título corredizo animado
- Diseño completamente responsive
- Modales elegantes con SweetAlert2
- Token JWT con expiración de 3 horas

####
🔐 Autenticación y Autorización
- 
- Registro de usuarios como administradores
- Login/logout seguro
- Protección de rutas (usuarios no logueados no pueden ver detalles)
- Token de autenticación almacenado seguro

####
📊 Funcionalidades CRUD
- 
- Create: Crear nuevas recetas
- Read: Ver listado y detalles de recetas
- Update: Editar recetas existentes
- Delete: Eliminar recetas

####
🚀 Deployment
- 
- Frontend deployado en Netlify
- Archivo _redirects para evitar errores 404
- Backend conectado con MongoDB Atlas

####
🛠️ Tecnologías utilizadas
- 
Frontend

- React 18 + Hooks
- Vite como build tool
- React Router Dom para navegación
- Axios para peticiones HTTP
- SweetAlert2 para mensajes al usuario
- CSS Modules para estilos

Backend

- Node.js + Express
- MongoDB Atlas (base de datos en la nube)
- JWT para autenticación
- Mongoose como ODM

####
🚀 Instalación y uso local
- 
- 1- Clonar el repositorio:
````
git clone https://github.com/Lucaspozziok64/blogRecetas-frontend.git
cd tu-repo
````

- 2 Instalar dependencias:
````
npm install
````  

- 3 Variables de entorno:
````
# Crear archivo .env
VITE_API_URL=tu-backend-url
VITE_API_KEY=tu-api-key
````

- 4 Ejecutar en desarrollo:
````
npm run dev
````

Mensajes con SweetAlert2
````
const showSuccessMessage = (message) => {
  Swal.fire({
    icon: 'success',
    title: '¡Éxito!',
    text: message,
    timer: 3000
  });
};
````

####
🌐 Deployment
- 
Netlify Config
````
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
````

Archivo _redirects
````
/*    /index.html    200
````

####
🔒 Seguridad
- 
- Tokens JWT con expiración de 3 horas
- Validación de datos en frontend y backend
- Variables de entorno protegidas
- CORS configurado apropiadamente

####
📱 Responsive Design
- 
La aplicación se adapta a:

- 📱 Mobile (320px - 768px)
- 📟 Tablet (768px - 1024px)
- 💻 Desktop (1024px+)

####
🤝 Contribuir
- 
- Fork el proyecto
- Crear una rama: git checkout -b feature/nueva-funcionalidad
- Commit cambios: git commit -m 'Agrega nueva funcionalidad'
- Push a la rama: git push origin feature/nueva-funcionalidad
- Abrir Pull Request

####
## 📫 Contact

- Lucas Figueroa
- 💼 [LinkedIn](https://linkedin.com/in/lucas-figueroa-579b0b30b)
- 📬 lukafigueroa64@gmail.com


⚠️ Nota: Para probar las funciones de admin, registra una cuenta a través del modal de registro. El token generado expirará automáticamente después de 3 horas de inactividad.