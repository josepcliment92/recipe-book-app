import "./App.css";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import UpBarra from "./components/UpBarra.jsx";
import RecipeList from "./components/RecipeList.jsx";

function Homepage() {
  return (
    <div>
      <UpBarra />
      <Sidebar />
      <Footer />
      <RecipeList />
    </div>
  );
}

export default Homepage;
