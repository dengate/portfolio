import Navbar from "./components/Navbar";
import PhotoContainer from "./components/PhotoContainer";
import "./App.css";
import PersonalInformation from "./components/PersonalInformation";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <div className={`background_${theme}`}>
        <Navbar />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <PhotoContainer />
                  <PersonalInformation />                  
                </React.Fragment>
              }
            />
            <Route
              path="/contact"
              element={
                <React.Fragment>
                  <Contact/>
                </React.Fragment>
              }
            />
            <Route
              path="/projects"
              element={
                <React.Fragment>
                  <Projects/>
                </React.Fragment>
              }
            />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
