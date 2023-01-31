import React from "react";
import "./App.css";
import Theme from "./config/Theme";
import { routes } from "./config/Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
function App() {
  return (
    <Theme>
      <Router>
        <div>
          <NavBar />
          <div className="flex">
          <SideBar/>
          <Routes>
            {routes.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))}
          </Routes>
          </div>
        </div>
      </Router>
    </Theme>
  );
}

export default App;
