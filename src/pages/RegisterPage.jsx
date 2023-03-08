import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (ev) => {
    ev.preventDefault();
  }

  return (
    <div>
      <form className="register" onSubmit={handleRegister}>
        <h2>
          <span className="font-weight-bold">Registro</span>
        </h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input type="password" placeholder="Confirmar contraseña" />
        <button>Registrarse</button>
      </form>
    </div>
  );
}
