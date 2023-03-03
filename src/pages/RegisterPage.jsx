export default function RegisterPage() {
  return (
    <div>
        <form className="register">
            <h2>
                <span className="font-weight-bold">Registro</span>
            </h2>
            <input type="text" placeholder="Nombre de usuario"/>
            <input type="password" placeholder="Contraseña"/>
            <input type="password" placeholder="Confirmar contraseña"/>
            <button>Registrarse</button>
        </form>
    </div>
  )
}
