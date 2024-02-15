import listRecipes from "./recipe-list.json";
import List from "./List";

function RecipeList() {
  
  return (
    <List data={listRecipes} />
  )
}

export default RecipeList;
