import RecipeList from "../components/RecipeList";
import Form from "../components/Form";
import SearchBar from "../components/SearchBar";


function DashboardPage(props) {
  return (
    <div className="dashboard">
      <div>
      <SearchBar currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/>
      </div>
      <div className="add-form">
      <Form currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/> 
      </div>
      <div >
      <RecipeList currentListRecipe={props.currentListRecipe} setCurrentListRecipe={props.setCurrentListRecipe}/>
      </div>
    </div>
  );
}

export default DashboardPage;
