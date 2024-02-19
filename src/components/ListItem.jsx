import { useParams } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import { useState } from "react";

function ListItem(props) {
  const [isEditFormShowing, setIsEditFormShowing] = useState(false);

  const handleToggleEditForm = () => {
    setIsEditFormShowing(!isEditFormShowing);
  };

  return (
    <div>
      <h3>Nombre: {props.data.name}</h3>
      <p>
        Calorias: {props.data.calories}{" "}
        {props.data.calories > 200 ? "❌" : "✅"}{" "}
        {props.data.calories > 400 && "❌"}{" "}
        {props.data.calories > 700 && "❌=💀"}
      </p>
      <div>
        <img src={props.data.image} alt={props.data.name} width="80px" />
      </div>
      <p>Raciones: {props.data.servings}</p>
      <button onClick={handleToggleEditForm}>
        Ver formulario Editar Receta
      </button>

      {isEditFormShowing === true ? (
        <UpdateForm
          data={props.data}
          setCurrentListRecipe={props.setCurrentListRecipe}
          index={props.index}
        />
      ) : null}
    </div>
  );
}

export default ListItem;
