import React from "react";
import CardList from "./CardList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Community Board</h1>
        <p className="app-description">
          Welcome to our Community Board! Here, you'll find a curated list of resources to help you learn and grow in the world of web development. Explore tutorials, tools, and documentation to enhance your skills.
        </p>
      </header>
      <CardList />
    </div>
  );
}

export default App;
