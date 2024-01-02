import EyeIcon from "../assets/icons/eyeIcon";
import EyeSlashIcon from "../assets/icons/eyeSlashIcon";

function CharacterList({ characters, onSelectedId, selectedId }) {
  return (
    <div className="w-full max-h-[350px]  sm:max-h-[600px] overflow-y-auto characters ">
      {characters.map((item) => {
        return (
          <Character item={item} key={item.id} classImage="flex items-center">
            <button
              className="col-span-1 self-center justify-self-end cursor-pointer"
              onClick={() => onSelectedId(item.id)}>
              {selectedId === item.id ? (
                <EyeSlashIcon
                  className="h-7 w-7 sm:h-8 sm:w-8"
                  color="#b91c1c"
                />
              ) : (
                <EyeIcon className="h-7 w-7 sm:h-8 sm:w-8" color="#b91c1c" />
              )}
            </button>
          </Character>
        );
      })}
    </div>
  );
}

export default CharacterList;

export function Character({ item, children, className, classImage }) {
  return (
    <div
      className={`w-full grid grid-flow-col grid-cols-5 my-4  p-1  lg:p-2 rounded-xl hover:bg-slate-500/10 ${
        className ? className : " bg-slate-800 "
      }`}
      key={item.id}>
      <div
        className={`w-full flex items-center   ${
          classImage ? classImage : "sm:col-span-2  min-h-[90px] "
        }  xl:col-span-1  text-white/90`}>
        <img
          src={item.image}
          alt={item.name}
          className=" w-full rounded-xl sm:rounded-2xl "
        />
      </div>
      <div className="col-span-3 flex flex-col justify-around items-start  px-2  text-white/90">
        <h3 className="  font-bold ">
          <span className="text-md">
            {item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦰"}
          </span>
          <span className="text-sm   ms-2">{item.name}</span>
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
      {children}
    </div>
  );
}
