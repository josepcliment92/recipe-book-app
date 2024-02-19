import RecipeList from "../components/RecipeList";
import Form from "../components/Form";


function DashboardPage(props) {
  return (
    <div>
      <div className="add-form">
      <Form currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/> 
      </div>
      <div>
      <RecipeList currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/>
      </div>
    </div>
  );
}

export default DashboardPage;
