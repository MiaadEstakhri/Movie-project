import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import CharacterEpisodes from "./components/characterEpisodes";
import { allCharacters } from "./data/data";
import "./App.css";
import Loading from "./components/loading";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchApi() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
      setIsLoading(false);
    }
    fetchApi();
  }, []);

  return (
    <main className="w-100  flex justify-center overflow-hidden">
      <div className="container mx-3">
        <Navbar numOfResult={characters.length} />
        <section className="grid grid-flow-row sm:grid-flow-col  sm:grid-cols-8 mt-6">
          <div className=" sm:col-span-4  2xl:col-span-3 mb-5 sm:mb-0 mt-4 text-center">
            {isLoading ? (
              <Loading />
            ) : (
              <CharacterList characters={characters} />
            )}
          </div>
          <div className=" sm:col-span-4 2xl:col-span-5 mx-[.125rem] sm:mx-0  sm:my-4 sm:ms-4 ">
            <CharacterDetail />
            <CharacterEpisodes />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
