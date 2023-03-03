import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        ByteBlog
      </Link>
      <nav>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </nav>
    </header>
  );
}
