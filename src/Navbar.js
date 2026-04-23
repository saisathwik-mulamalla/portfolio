import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <NavLink to="/" style={{ color: "white", margin: "10px" }}>
        Home
      </NavLink>
      <NavLink to="/projects" style={{ color: "white", margin: "10px" }}>
        Projects
      </NavLink>
    </nav>
  );
}

export default Navbar;