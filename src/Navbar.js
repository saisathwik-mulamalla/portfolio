import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <NavLink to="/">Home</NavLink>
<NavLink to="/projects">Projects</NavLink>
    </nav>
  );
}

export default Navbar;