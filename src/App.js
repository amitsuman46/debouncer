import "./App.css";
import DebouncedListCountry from "./components/DebouncedListCountry";
import ListCountry from "./components/ListCountry";
import LodAshListCountry from "./components/LodAshListCountry";
function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-3xl">Debouncing</h1>
      </div>
      <div className="flex items-center justify-center p-3 m-3 border border-purple-600">
        <div className="p-2 m-2 border border-black">
          <h2>Without Debounce</h2> <ListCountry />
        </div>
        <div className="p-2 m-2 border border-black">
          <h2>With Loadash Debounce</h2>
          <LodAshListCountry />
        </div>
      </div>
    </>
  );
}

export default App;
