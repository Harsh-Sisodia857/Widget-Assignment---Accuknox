import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="bg-gray-200 flex-grow flex flex-col">
        <Main />
      </div>
    </div>
  );
}

export default App;
