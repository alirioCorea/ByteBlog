export default function LoginPage() {
  return (
    <div>
        <form className="login">
          <h2>
            <span className="font-weight-bold">Iniciar Sesión</span>
          </h2>
            <input type="text" placeholder="Nombre de usuario"/>
            <input type="password" placeholder="Contraseña"/>
            <button>Iniciar Sesión</button>
        </form>
    </div>
  )
}
