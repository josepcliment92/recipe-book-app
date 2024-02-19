import { useState } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom"; 

function RecipeList(props) {
    



  const handleRemoveRecipe = (indexToRemove) => {
    let currentListRecipeClone = JSON.parse(JSON.stringify(props.currentListRecipe));

    currentListRecipeClone.splice(indexToRemove, 1);

    props.setCurrentListRecipe(currentListRecipeClone);
  };

  return (
    <div>
      <h2>Lista de recetas</h2>
      {props.currentListRecipe.map((eachRecipe, index) => {
        return (
          <div className="list-item" key={index}>
            <ListItem data={eachRecipe} setCurrentListRecipe={props.setCurrentListRecipe} index={index} />
            <button onClick={() => handleRemoveRecipe(index)}>Borrar</button>
            <Link to={`/item-details/${eachRecipe.name}`}>
            <button>Detalles</button>
            </Link>
          </div>
        );
      })}
    </div>
  );

}

export default RecipeList