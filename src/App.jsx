import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";

function App() {
  return (
    <main className="w-100 h-screen flex justify-center">
      <div className="container mx-3">
        <Navbar />
        <section className="grid grid-flow-row sm:grid-flow-col  sm:grid-cols-8">
          <div className=" col-span-3 sm:col-span-4 ">
            <CharacterList />
          </div>
          <div className=" bg-blue-700 sm:col-span-4 ">3</div>
        </section>
      </div>
    </main>
  );
}

export default App;
