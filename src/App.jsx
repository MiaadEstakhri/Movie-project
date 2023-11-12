import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="w-100 h-screen bg-slate-800 flex justify-center">
      <div className="container mx-2 sm:mx-auto">
        <Navbar />
      </div>
    </main>
  );
}

export default App;
