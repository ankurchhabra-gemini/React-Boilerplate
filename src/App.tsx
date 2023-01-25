import React from "react";
import "./App.css";
import Theme from "./config/Theme";
import { routes } from "./config/Theme/Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Theme>
      <Router>
        <div>
          <Routes>
            {routes.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))}
          </Routes>
        </div>
      </Router>
    </Theme>
  );
}

export default App;
