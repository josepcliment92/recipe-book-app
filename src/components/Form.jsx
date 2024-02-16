import { useState } from "react"
import listRecipes from "./recipe-list.json";

function Form() {
    const [recipes, setRecipes] = useState(listRecipes)
    const [nameInput, setNameInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState(0)
    const [imageInput, setImageInput] = useState("")
    const [servingsInput, setServingsInput] = useState(0)

    const handleNameInput = (event) => {
        setNameInput (event.target.value)
    }
    const handleCaloriesInput = (event) => {
        setCaloriesInput (event.target.value)
    }
    const handleImageInput = (event) => {
        setImageInput (event.target.value)
    }
    const handleServingsInput = (event) => {
        setServingsInput (event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newRecipe = {
            id: Math.random()*100,
            name: nameInput,
            calories: caloriesInput,
            image: imageInput,
            servings: servingsInput,
        }

        let clone = JSON.parse(JSON.stringify(recipes))
        clone.unshift(newRecipe)
        setRecipes(clone)
    }

  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <span>Añade tu receta</span>
            <div>
                <div>
                <label>
                    Nombre
                    <input name="name" type="text" placeholder="Nombre" value={nameInput} onChange={handleNameInput}/>
                </label>
                </div>
                <div>
                <label>
                    Calorías
                    <input name="calories" type="number" placeholder="0" value= {caloriesInput} onChange={handleCaloriesInput}/>
                </label>
                </div>
                <div>
                <label>
                    Imagen
                    <input name="imagen" type="url" placeholder="Añade la url" value= {imageInput} onChange={handleImageInput}/>
                </label></div>
                <div>
                <label>
                    Raciones
                    <input name="servings" type="number" placeholder="0" value={servingsInput} onChange={handleServingsInput}/>
                </label></div>
                <button>Añade tu receta</button>
            </div>
        </form>
    </div>
  )
}

export default Form