
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  
  const recipeId = useParams()
  
  const recipeDetail = props.currentListRecipe.find((eachRecipe) => eachRecipe.name == recipeId.recipeId ? true : false)
  
  
    return (
    
    
    <div>
      <h2>{recipeDetail.name}</h2>

      <div> <img src={recipeDetail.image} width="500px" />   </div>

      <p>Esta receta contiene ${recipeDetail.calories} calorías</p>

      <Link to={"/"} ><button className="btn-details">Vuelve a tus recetas</button></Link> 
    </div>
  );
}

export default ItemDetailsPage;

//la información que manejamos aquí no va a venir del .json, la traeremos con prop drilling desde la App. studentsDetailsPage
//{recipeDetail && (aquí dentro el div del return)}