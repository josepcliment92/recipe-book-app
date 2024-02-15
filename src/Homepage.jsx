import "./App.css";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import UpBarra from "./components/UpBarra.jsx";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx"; 
import AboutPage from "./pages/AboutPage.jsx";
//import RecipeList from "./components/RecipeList.jsx";

function Homepage() {
  return (
    <div>
      <UpBarra />
      <Sidebar />
      <Footer />
      <div>
        <Routes>
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"/item-details"} element={<ItemDetailsPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Homepage;
