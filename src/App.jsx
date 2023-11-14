import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";

function App() {
  return (
    <main className="w-100 h-screen flex justify-center overflow-hidden">
      <div className="container mx-3">
        <Navbar />
        <section className="grid grid-flow-row sm:grid-flow-col  sm:grid-cols-8">
          <div className=" sm:col-span-4  2xl:col-span-3 ">
            <CharacterList />
          </div>
          <div className=" sm:col-span-4 2xl:col-span-5">
            <CharacterDetail />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
