import { character } from "../data/data";

const CharacterDetail = () => {
  return (
    <div className=" grid grid-flow-col grid-cols-5 sm:h-[16.5rem] bg-slate-800 my-2 sm:my-6 ms-2 lg:p-4 rounded-2xl">
      <div className="col-span-2 ">
        <img
          src={character.image}
          alt={character.name}
          className="w-full  rounded-s-2xl"
        />
      </div>
    </div>
  );
};

export default CharacterDetail;
