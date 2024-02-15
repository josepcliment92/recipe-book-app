import { useState } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
//import listRecipes from "./recipe-list.json"; 

function List(props) {
    

const [currentListRecipe, setCurrentListRecipe] = useState(props.data);

  const handleRemoveRecipe = (indexToRemove) => {
    let currentListRecipeClone = JSON.parse(JSON.stringify(currentListRecipe));

    currentListRecipeClone.splice(indexToRemove, 1);

    setCurrentListRecipe(currentListRecipeClone);
  };

  return (
    <div>
      <h2>Lista de recetas</h2>
      {currentListRecipe.map((eachRecipe, index) => {
        return (
          <div key={index}>
            <ListItem data={eachRecipe} />
            <button onClick={() => handleRemoveRecipe(index)}>Borrar</button>
            <Link to={"/item-details"}>
            <button>Detalles</button>
            </Link>
          </div>
        );
      })}
    </div>
  );

}

export default List