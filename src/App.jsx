import { useState } from "react";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import CharacterEpisodes from "./components/characterEpisodes";
import { allCharacters } from "./data/data";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(allCharacters);
  return (
    <main className="w-100 h-screen flex justify-center overflow-hidden">
      <div className="container mx-3">
        <Navbar numOfResult={character.length} />
        <section className="grid grid-flow-row sm:grid-flow-col  sm:grid-cols-8">
          <div className=" sm:col-span-4  2xl:col-span-3 ">
            <CharacterList characters={character} />
          </div>
          <div className=" sm:col-span-4 2xl:col-span-5 mx-[.125rem] sm:mx-0 my-2 sm:my-4 sm:ms-4 ">
            <CharacterDetail />
            <CharacterEpisodes />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
