import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredResult = props.currentListRecipe.filter((eachRecipe) => {
    if (search.length > 0) {
      return eachRecipe.name.toLowerCase().match(search.toLowerCase());
    }
  });
  console.log(filteredResult);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setCurrentListRecipe(search);
    //console.log(search)
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="label-search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="🔎 Busca aquí"
        ></input>
        {/*<button type="submit">¡Encuentra tu receta!</button>*/}
      </form>
      <div className="filtered-list">
        {filteredResult.map((eachRecipe) => {
          return (
            <Link to={`/item-details/${eachRecipe.name}`}>
              <div className="recipe-suggestion">
                <img src={eachRecipe.image} width="30px" />
                <p>{eachRecipe.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
