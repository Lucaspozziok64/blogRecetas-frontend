import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Recetas from "./components/Recetas";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container my-5">
        <Titulo />
        <div className="container my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mx-2">
          <Recetas />
        </div>
      </main>
    </>
  );
}

export default App;
