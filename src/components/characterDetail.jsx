import { character } from "../data/data";

const CharacterDetail = () => {
  return (
    <div className=" grid grid-flow-col grid-cols-5  bg-slate-800 my-2 sm:my-6 ms-2 rounded-2xl ">
      <div className="col-span-2  ">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-auto xl:max-h-64  rounded-s-2xl"
        />
      </div>
    </div>
  );
};

export default CharacterDetail;
