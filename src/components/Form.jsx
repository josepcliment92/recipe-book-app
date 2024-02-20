import { useState } from "react"


function Form(props) {
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
//console.log("pasa algo")
        const newRecipe = {
            id: Math.floor(Math.random() * 1000000),
            name: nameInput,
            calories: caloriesInput,
            image: imageInput,
            servings: servingsInput,
        }
//console.log(newRecipe)
        let clone = JSON.parse(JSON.stringify(props.currentListRecipe))
        clone.unshift(newRecipe)
        props.setCurrentListRecipe(clone)
    }

  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <span className="title-add-form">Tu nueva receta</span>
            <div>
                <div>
                <label >
                    Nombre:
                    <input className="label-add-form" name="name" type="text" placeholder="Nombre" value={nameInput} onChange={handleNameInput}/>
                </label>
                </div>
                <div>
                <label>
                    Calorías:
                    <input className="label-add-form" name="calories" type="number" placeholder="0" value= {caloriesInput} onChange={handleCaloriesInput}/>
                </label>
                </div>
                <div>
                <label>
                    Imagen:
                    <input className="label-add-form" name="imagen" type="url" placeholder="Añade la url" value= {imageInput} onChange={handleImageInput}/>
                </label></div>
                <div>
                <label>
                    Raciones:
                    <input className="label-add-form" name="servings" type="number" placeholder="0" value={servingsInput} onChange={handleServingsInput}/>
                </label></div>
                <button className="btn-add-recipe" type="submit" >Añade tu receta</button>
                
            </div>
        </form>
    </div>
  )
}

export default Form