import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div>
        <Link to="/">Home Page</Link>
      </div>
      <div>
        <Link to="/about">About Page</Link>
      </div>
    </div>
  );
}

export default Sidebar;
