import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultPage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ForgotPW from "./pages/ForgotPW";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/results">Results</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPW />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
