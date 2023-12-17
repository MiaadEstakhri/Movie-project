import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import CharacterEpisodes from "./characterEpisodes";
import Loading from "./loading";

function CharacterDetail({ selectedId }) {
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCharacterApi() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${selectedId}`
        );
        setCharacter(data);

        const episodesId = data.episode.map((item) => item.split("/").at(-1));
        const { data: episodesData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        console.log(episodesData);
        setEpisodes([episodesData].flat().slice(0, 8));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (selectedId) fetchCharacterApi();
  }, [selectedId]);

  if (loading)
    return (
      <div className="mt-36 ">
        <Loading />
      </div>
    );

  if (!character || !selectedId)
    return (
      <div className="w-100 flex justify-center items-center font-bold text-white/90 mt-36 text-xl xl:text-2xl">
        Please select a character
      </div>
    );

  return (
    <>
      <div className=" grid grid-flow-col grid-cols-5  bg-slate-800   rounded-xl ">
        <div className="col-span-2 text-white/90 ">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full xl:max-h-64  rounded-s-2xl"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-around ps-3  py-3 lg:py-0 text-white/90">
          <div>
            <h3 className=" whitespace-nowrap  font-bold ">
              <span className="text-lg">
                {character.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦰"}
              </span>
              <span className="text-base lg:text-xl ms-2">
                {character.name}
              </span>
            </h3>
            <div className="text-xs lg:text-sm font-light">
              <span
                className={`inline-block w-3 h-3  rounded-full mx-1 ${
                  character.status === "Dead" ? "bg-red-500" : "bg-green-500"
                }`}></span>
              <span className=""> {character.status} </span>
              <span className=""> - {character.species}</span>
            </div>
          </div>
          <div className="text-xs lg:text-sm mt-3 ms-1">
            <p className="text-gray-500/40 whitespace-nowrap text-sm ">
              Last know location:
            </p>
            <p className="whitespace-nowrap mt-1 font-semibold">
              {character.location.name}
            </p>
            <button className="bg-slate-500/95 py-2 px-3 md:py-3 sm:px-4 rounded-2xl mt-3 mb-2 font-extrabold hover:bg-slate-600/80 ">
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
      <CharacterEpisodes episodes={episodes} />
    </>
  );
}

export default CharacterDetail;
