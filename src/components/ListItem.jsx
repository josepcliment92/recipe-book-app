

function ListItem(props) {
  return (
    <div>
        <h3>Nombre: {props.data.name}</h3>
            <p>Calorias: {props.data.calories} {props.data.calories > 200 ? "❌" : "✅"} {props.data.calories > 400 && "❌"} {props.data.calories > 700 && "❌=💀"}</p>
            <div>
              <img src={props.data.image} alt={props.data.name} width="80px" />
            </div>
            <p>Raciones: {props.data.servings}</p>
  
        
        </div>
  )
}

export default ListItem