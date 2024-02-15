import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div>
      <h2>Algo ha ido mal... :(</h2>
      <p>Si quieres volver a tus recetas pincha abajo</p>
      <Link to={"/"}>
        <button>Ir a Tus Recetas</button>
      </Link>
    </div>
  )
}

export default NotFoundPage