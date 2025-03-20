import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/footer";
import About from "./pages/aboutus";
import Skills from "./pages/skills";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-primary bg-warning">
        <div className="container">
          <Link className="navbar-brand" to="/">My Portfolio</Link>
          <div className="profile-container">
         <div className="profile-image-container">
           <img 
              src="/skills/0T5A4529.JPG"
              alt="Profile"
              className="profile-image"
          />
        </div>
        </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container bg-dark "style={{color: 'white'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      <Footer style={{ backgroundcolor:'warning' }}/>
    </Router>
  );
};

export default App;
