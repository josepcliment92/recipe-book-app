import "./App.css";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import UpBarra from "./components/UpBarra.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import listRecipes from "./assets/recipe-list.json";
import DashboardPage from "./pages/DashboardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
//import RecipeList from "./components/RecipeList.jsx";

function App() {
  const [currentListRecipe, setCurrentListRecipe] = useState(listRecipes);

  return (
    <div>
      <div className="up-barra">
        <UpBarra />
      </div>
      <div className="cuerpo-pagina">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="home-page">
          <Routes>
            <Route
              path={"/"}
              element={
                <DashboardPage
                  currentListRecipe={currentListRecipe}
                  setCurrentListRecipe={setCurrentListRecipe}
                />
              }
            />
            <Route
              path={"/item-details/:recipeId"}
              element={
                <ItemDetailsPage
                  currentListRecipe={currentListRecipe}
                  setCurrentListRecipe={setCurrentListRecipe}
                />
              }
            />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
