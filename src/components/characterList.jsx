import EyeIcon from "../assets/icons/eyeIcon";

function CharacterList({ characters, onSelectedId }) {
  return (
    <div className="max-h-[350px]  sm:max-h-[600px] overflow-y-auto characters ">
      {characters.map((item) => {
        return (
          <div
            className="grid grid-flow-col grid-cols-5  bg-slate-800 my-4  p-2 sm:p-3 lg:p-4 rounded-xl"
            key={item.id}>
            <div className="col-span-1 sm:col-span-2">
              <img
                src={item.image}
                alt={item.name}
                className=" w-full lg:w-[90%] sm:h-24 lg:h-32 xl:h-36  rounded-xl sm:rounded-2xl "
              />
            </div>
            <div className="col-span-3 flex flex-col justify-around items-start  ps-3 lg:ps-0 text-white/90">
              <h3 className=" whitespace-nowrap  font-bold ">
                <span className="text-lg">
                  {item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦰"}
                </span>
                <span className="text-xs whitespace-pre-wrap lg:text-xl ms-2">
                  {item.name}
                </span>
              </h3>
              <div className="text-xs lg:text-sm ">
                <span
                  className={`inline-block w-3 h-3  rounded-full font-light mx-1 ${
                    item.status === "Dead" ? "bg-red-500" : "bg-green-500"
                  }`}></span>
                <span className=""> {item.status} </span>
                <span className=""> - {item.species}</span>
              </div>
            </div>
            <button
              className="col-span-1 self-center justify-self-end cursor-pointer"
              onClick={() => onSelectedId(item.id)}>
              <EyeIcon className="h-7 w-7 sm:h-8 sm:w-8" color="#b91c1c" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
