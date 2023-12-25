import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import CharacterEpisodes from "./components/characterEpisodes";
import Loading from "./components/loading";
import "./App.css";
import Modal from "./components/modal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchApi() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`,
          { signal }
        );
        setCharacters(data.results);
      } catch (error) {
        if (!axios.isCancel()) {
          setCharacters([]);
          toast.error(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleSelectId = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavorites = (chr) => {
    setFavorites((prev) => [...prev, chr]);
  };

  const isAddFavorites = favorites.map((fav) => fav.id).includes(selectedId);

  return (
    <main className="w-full h-screen flex justify-center ">
      <Toaster />
      <Modal header={"this  is title"} />
      <div className="h-full container mx-4 xl:mx-0">
        <Navbar
          numOfResult={characters.length}
          query={query}
          setQuery={setQuery}
          numOfFavorites={favorites.length}
        />
        <section className="grid grid-flow-row sm:grid-flow-col  sm:grid-cols-8 mt-6">
          <div className=" sm:col-span-4  2xl:col-span-3 mb-5 sm:mb-0  sm:mt-3 text-center">
            {isLoading ? (
              <Loading />
            ) : (
              <CharacterList
                characters={characters}
                onSelectedId={handleSelectId}
                selectedId={selectedId}
              />
            )}
          </div>
          <div className=" sm:col-span-4 2xl:col-span-5 mx-[.125rem] sm:mx-0  sm:my-4 sm:ms-4 mb-5 ">
            <CharacterDetail
              selectedId={selectedId}
              onAddFavorites={handleAddFavorites}
              isAddFavorites={isAddFavorites}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
