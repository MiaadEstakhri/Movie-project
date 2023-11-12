const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-white rounded-xl py-3 px-4 mt-8 ">
      <div className="font-bold ">LOGO</div>
      <div className="w-24 sm:w-36 md:w-44 xl:w-56 bg-slate-500 py-1.5 px-3 rounded-md ">
        <input
          type="text"
          placeholder="search ..."
          className="bg-transparent outline-none"
        />
      </div>
      <div className="">Found X Results</div>
      <div className="text-3xl">♡</div>
    </nav>
  );
};

export default Navbar;
