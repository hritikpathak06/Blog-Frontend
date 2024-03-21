import React, { useEffect, useState } from "react";
import Script from "./Components/Header/Script";

function App() {
  return (
    <div className="container">
      <Script />
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme? current_theme : "light");

  useEffect(() =>{
    localStorage.setItem("current_theme", theme);
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Script theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
