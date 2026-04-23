function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <NavLink to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </NavLink>

      <NavLink to="/projects" style={{ color: "white" }}>
        Projects
      </NavLink>
    </nav>
  );
}