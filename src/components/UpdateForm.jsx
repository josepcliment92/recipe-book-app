import React from "react";
import { useState } from "react";

function UpdateForm(props) {
  const [name, setName] = useState(props.data.name);
  const [calories, setCalories] = useState(props.data.calories);
  const [servings, setServings] = useState(props.data.servings);
  const [image, setImage] = useState(props.data.image)

  const handleName = (event) => setName(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      name: name,
      calories: calories,
      servings: servings,
      image: image,
    };

    props.setCurrentListRecipe((allRecipes) => {
      const clone = JSON.parse(JSON.stringify(allRecipes));

      clone[props.index] = updatedRecipe;
      return clone;
    });

    props.setIsEditFormShowing(false)
  };

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <div>
          <span>Aquí puedes editar tu receta</span>
          <div>
            <div>
              <label>
                Nombre
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleName}
                />
              </label>
            </div>
            <div>
              <label>
                Calorías
                <input
                  name="calories"
                  type="number"
                  value={calories}
                  onChange={handleCalories}
                />
              </label>
            </div>
            <label>
              Raciones
              <input
                name="servings"
                type="number"
                value={servings}
                onChange={handleServings}
              />
            </label>
          </div>
          <button className="btn-edite-recipe" type="submit">¡Edita tu receta!</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
