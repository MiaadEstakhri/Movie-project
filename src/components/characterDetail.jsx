import { character } from "../data/data";

const CharacterDetail = () => {
  return (
    <div className=" grid grid-flow-col grid-cols-5  bg-slate-800 my-2 sm:my-4 sm:ms-4  rounded-2xl ">
      <div className="col-span-2  ">
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
            <span className="text-base lg:text-xl ps-1">{character.name}</span>
          </h3>
          <div className="text-xs lg:text-sm font-light">
            <span
              className={`inline-block w-3 h-3  rounded-full ${
                character.status === "Dead" ? "bg-red-500" : "bg-green-500"
              }`}></span>
            <span className=""> {character.status} </span>
            <span className=""> - {character.species}</span>
          </div>
        </div>
        <div className="text-xs lg:text-sm mt-3">
          <p className="text-gray-500/40 whitespace-nowrap text-sm ">
            Last know location:
          </p>
          <p className="whitespace-nowrap mt-1 font-semibold">
            {character.location.name}
          </p>
          <button className="bg-slate-500/95 py-2 px-3 md:py-3 sm:px-4 rounded-xl mt-3 font-extrabold ">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
