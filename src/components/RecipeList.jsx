import listRecipes from "./recipe-list.json"
import { useState } from "react"

function RecipeList() {

    const filteredRecipes = listRecipes.map((eachRecipe) => {
        if (eachRecipe.calories > 200){
            return true
        }else {
            return false
        }
    })
    
    const [currentListRecipe, setCurrentListRecipe] = useState(filteredRecipes)

    const handleRemoveRecipe = (indexToRemove) => {
        let currentListRecipeClone = JSON.parse(JSON.stringify(currentListRecipe))
        
        currentListRecipeClone.splice(indexToRemove, 1)

        setCurrentListRecipe(currentListRecipeClone)
    }
  
  
    return (
    <div>
        <h2>Lista de recetas</h2>
        {currentListRecipe.map((eachRecipe, index) => {
            return (
                <div key={index}>
                    <h3>Nombre: {eachRecipe.name}</h3>
                    <p>Calorias: {eachRecipe.calories}</p>
                    <img src={eachRecipe.image} alt={eachRecipe.name} width="80px"/>
                    <p>Raciones: {eachRecipe.servings}</p>
                    <button onClick={() => handleRemoveRecipe(index)}>Borrar</button>
                </div>
            )
        })}
    </div>
  )
}

export default RecipeList