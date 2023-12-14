import HeartIcon from "../assets/icons/heartIcon";
import logo from "../assets/images/logo_prev_ui.png";

function Navbar({ numOfResult, query, setQuery }) {
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-white rounded-xl py-3 px-4 mt-8 ">
      <div className="font-bold text-xs sm:text-sm">
        <img src={logo} alt="Logo" className="w-24 sm:w-28" />
      </div>
      <form
        className="w-28  sm:w-44 xl:w-56 bg-slate-500 py-1.5 px-3 rounded-lg "
        onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="search ..."
          className="bg-transparent outline-none w-full"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <div className="text-gray-400 text-xs sm:text-sm ms-4 sm:ms-0">
        Found {numOfResult} Results
      </div>
      <div className="relative">
        <span className="h-4 w-4 sm:h-5 sm:w-5 flex justify-center items-center bg-red-600 text-white rounded-full text-xs absolute left-4 sm:left-6 bottom-[1.1rem] sm:bottom-[1.3rem]">
          3
        </span>

        <HeartIcon color="#dc2626" className="w-7 h-7 sm:w-9 sm:h-9" />
      </div>
    </nav>
  );
}

export default Navbar;
