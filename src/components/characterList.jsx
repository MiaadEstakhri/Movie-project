import { allCharacters } from "../data/data";

const CharacterList = () => {
  return (
    <div className="">
      {allCharacters.map((item) => {
        return (
          <div className="grid grid-flow-col grid-cols-7 bg-slate-800 my-6 me-2 p-1.5  sm:p-2 md:p-3 rounded-2xl ">
            <img
              src={item.image}
              alt={item.name}
              className="col-span-2 sm:col-span-2 w-16  md:w-20 lg:w-24 2xl:w-28 h-12 sm:h-14 md:h-20 rounded-xl sm:rounded-2xl object-fill"
            />
            <h3 className="">
              <span className=""></span>
              {item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦰"}
              <span className=""></span>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
