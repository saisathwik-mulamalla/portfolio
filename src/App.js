import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <h2>About Me</h2>
      <p>I am a Computer Science student passionate about technology.</p>

      <h2>Research Interests</h2>
      <p>Artificial Intelligence, Networking, Web Development</p>

      <h2>Personal Details</h2>
      <ul>
        <li>Name: M.SaiSathwik Reddy</li>
        <li>Phone: 6305489738</li>
        <li>Email: mulamallasathwikreddy28@gmail.com</li>
        <li>Skills: HTML, CSS, JavaScript, React</li>
      </ul>
      <img src="/profile.jpg" alt="Profile" width="150" />
      
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      <div>
        <h3>Portfolio Website</h3>
        <a href="https://github.com/your-username/portfolio">
          View Project
        </a>
      </div>

      <div>
        <h3>Task Manager App</h3>
        <a href="https://github.com/your-username/task-manager">
          View Project
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;