import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import CharacterEpisodes from "./components/characterEpisodes";
import Loading from "./components/loading";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results);
      } catch (error) {
        setCharacters([]);
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, [query]);

  return (
    <main className="w-100 h-screen  flex justify-center ">
      <Toaster />
      <div className="h-100 container mx-4 xl:mx-0">
        <Navbar
          numOfResult={characters.length}
          query={query}
          setQuery={setQuery}
        />
        <section className="grid grid-flow-row sm:grid-flow-col  sm:grid-cols-8 mt-6">
          <div className=" sm:col-span-4  2xl:col-span-3 mb-5 sm:mb-0  sm:mt-3 text-center">
            {isLoading ? (
              <Loading />
            ) : (
              <CharacterList characters={characters} />
            )}
          </div>
          <div className=" sm:col-span-4 2xl:col-span-5 mx-[.125rem] sm:mx-0  sm:my-4 sm:ms-4 mb-5 ">
            <CharacterDetail />
            <CharacterEpisodes />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
