import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";

function App() {
  return (
    <main className="w-100 h-screen bg-slate-800 flex justify-center">
      <div className="container mx-2 sm:mx-auto">
        <Navbar />
        <section className="grid grid-flow-col  grid-cols-7">
          <section className=" col-span-2">
            <CharacterList />
          </section>
          <section className=" bg-blue-700 col-span-5">3</section>
        </section>
      </div>
    </main>
  );
}

export default App;
