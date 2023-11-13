import { allCharacters } from "../data/data";

const CharacterList = () => {
  return (
    <div className="">
      {allCharacters.map((item) => {
        return (
          <div className="grid grid-flow-col grid-cols-5  bg-slate-800 my-6 me-2 p-2 sm:p-3 lg:p-4 rounded-2xl">
            <img
              src={item.image}
              alt={item.name}
              className="col-span-1 sm:col-span-2 w-full lg:w-[90%] sm:h-24 lg:h-32 xl:h-36  rounded-xl sm:rounded-2xl "
            />
            <div className="col-span-3 flex flex-col justify-between lg:justify-around  ps-3 lg:ps-0 text-white">
              <h3 className=" whitespace-nowrap  font-bold ">
                <span className="text-lg">
                  {item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦰"}
                </span>
                <span className="text-base lg:text-xl ps-1">{item.name}</span>
              </h3>
              <div className="text-xs lg:text-sm ">
                <span
                  className={`inline-block w-3 h-3  rounded-full ${
                    item.status === "Dead" ? "bg-red-500" : "bg-green-500"
                  }`}></span>
                <span className=""> {item.status} </span>
                <span className=""> - {item.species}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
