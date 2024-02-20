import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div>
        <Link to="/" className="sidebar-links">Home Page</Link>
      </div>
      <div>
        <Link to="/about" className="sidebar-links">About Page</Link>
      </div>
    </div>
  );
}

export default Sidebar;
