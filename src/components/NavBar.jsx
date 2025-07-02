const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-black">
				<div className="container-fluid w-100 d-flex justify-content-between">
					<h6 className="mb-0 text-white">Blog recetas📝📃</h6>
					<button className="botonAdministrar">Administrar Recetas</button>
				</div>
      </nav>
    </header>
  );
};

export default NavBar;
