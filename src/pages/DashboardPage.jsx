import RecipeList from "../components/RecipeList";
import Form from "../components/Form";


function DashboardPage(props) {
  return (
    <div>

      <Form currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/> 
    

      <RecipeList currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/>

    </div>
  );
}

export default DashboardPage;
