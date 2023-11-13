const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-white rounded-xl py-3 px-4 mt-8 ">
      <div className="font-bold text-xs sm:text-sm">LOGO</div>
      <div className="w-20  sm:w-36 md:w-44 xl:w-56 bg-slate-500 py-1.5 px-3 rounded-lg ">
        <input
          type="text"
          placeholder="search ..."
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="text-gray-400 text-xs sm:text-sm">Found X Results</div>
      <div className="relative">
        <span className="h-4 w-4 sm:h-5 sm:w-5 flex justify-center items-center bg-red-600 text-white rounded-full text-xs absolute left-4 sm:left-6 top-0">
          3
        </span>
        <span className="text-2xl sm:text-4xl text-red-600">♡</span>
      </div>
    </nav>
  );
};

export default Navbar;
