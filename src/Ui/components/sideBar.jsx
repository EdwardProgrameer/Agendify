import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';


export const Sidebar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-2">


      <Link
        className="navbar-brand"
        to="/"
      >
        Agendify
      </Link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
            to="/marvel"
          >
            To Do
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
            to="/dc"
          >
            Actividades
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
            to="/search"
          >
            Administracion
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">

          <span className="nav-item nav-link text-primary">
            Edward Arredondo
          </span>

          <button
            className="nav-item nav-link btn"
            onClick={onLogout}
          >
            Logout
          </button>

        </ul>
      </div>

    </nav>
  )
}
