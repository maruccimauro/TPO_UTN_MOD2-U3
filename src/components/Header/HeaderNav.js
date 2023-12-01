import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div className="navBar">
      <Link to="/home" className="navBarItem">
        INICIO
      </Link>

      <Link to="/registrarse" className="navBarItem">
        REGISTRARSE
      </Link>

      <Link to="/ingresar" className="navBarItem">
        INGRESAR
      </Link>
    </div>
  );
}
