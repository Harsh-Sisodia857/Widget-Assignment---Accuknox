import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 h-full flex flex-col">
        <Main />
      </div>
    </div>
  );
}

export default App;
