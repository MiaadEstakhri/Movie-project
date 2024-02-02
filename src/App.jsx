import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar";
import CharacterList, { Character } from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import Loading from "./components/loading";
import "./App.css";
import Modal from "./components/modal";
import TrashIcon from "./assets/icons/trashIcon";
import useCharacters from "./hooks/characters";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, characters } = useCharacters(
    query,
    `https://rickandmortyapi.com/api/character/?name=${query}`
  );

  useEffect(() => {
    localStorage.setItem("FAVORITES", JSON.stringify(favorites));
  }, [favorites]);

  const handleSelectId = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavorites = (chr) => {
    setFavorites((prev) => [...prev, chr]);
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(() => favorites.filter((fav) => fav.id !== id));
  };

  const isAddFavorites = favorites.map((fav) => fav.id).includes(selectedId);

  return (
    <main className="w-full h-screen flex justify-center ">
      <Toaster />

      <Modal header={"This  is title"} onOpen={setIsOpen} open={isOpen}>
        {favorites.length === 0 ? (
          <p className=" flex justify-center items-center text-white/90 font-bold mt-10">
            No character added
          </p>
        ) : (
          favorites.map((item) => (
            <Character
              item={item}
              key={item.id}
              className="bg-slate-700/100"
              classImage="col-span-1  ">
              <button
                className="col-span-1 self-center justify-self-end cursor-pointer"
                onClick={() => handleRemoveFavorite(item.id)}>
                <TrashIcon className="h-7 w-7 sm:h-6 sm:w-6" color="#b91c1c" />
              </button>
            </Character>
          ))
        )}
      </Modal>
      <div className="h-full container mx-2 xl:mx-0">
        <Navbar
          numOfResult={characters.length}
          query={query}
          setQuery={setQuery}
          favorites={favorites}
          onSelectFavorites={() => setIsOpen((is) => !is)}
        />
        <section className=" w-full sm:grid  sm:grid-flow-col  sm:grid-cols-8 mt-6 ">
          <div className=" sm:col-span-3   mb-5 sm:mb-0  sm:mt-3 text-center">
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
          <div className=" sm:col-span-5  mx-[.125rem] sm:mx-0  sm:my-4 sm:ms-4 mb-5 ">
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
