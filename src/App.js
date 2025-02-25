import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ForgotPW from "./pages/ForgotPW";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultPage";
import AboutPage from "./pages/AboutPage";
import Logout from "./pages/Logout";
import NavBarComponent from "./pages/NavBarComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup function
  }, []);

  return (
    <div className="checkered-background">
      <Router>
        <Routes>
          {/* Main Page (no NavBarComponent) */}
          <Route path="/" element={<MainPage />} />

          {/* Other Pages Wrapped in NavBarComponent */}
          <Route
            path="*"
            element={
              <NavBarComponent>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/forgot" element={<ForgotPW />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/home" element={user ? <HomePage /> : <Navigate to="/" />} />
                  <Route path="/upload" element={<UploadPage />} />
                  <Route path="/results" element={<ResultPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/logout" element={<Logout />} />
                </Routes>
              </NavBarComponent>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
