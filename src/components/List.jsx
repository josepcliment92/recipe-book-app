import { useState } from "react";
import ListItem from "./ListItem";
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
          </div>
        );
      })}
    </div>
  );

}

export default List