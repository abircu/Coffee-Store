import { useLoaderData } from "react-router-dom";
import CoffeeCart from "./Components/CoffeeCart";

function App() {
  const Coffes = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-6">
      <h1 className="text-6xl text-purple-600 text-center">
        Best coffe:{Coffes.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {Coffes.map((coffee) => (
          <CoffeeCart key={coffee._id} coffee={coffee}></CoffeeCart>
        ))}
      </div>
    </div>
  );
}

export default App;
