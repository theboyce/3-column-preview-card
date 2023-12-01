import Luxury from './components/Luxury';
import Sedan from './components/Sedan';
import Suv from './components/Suv';

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="w-[60%] h-[75%] rounded-lg bg-red-400 flex">
        <Sedan />
        <Suv />
        <Luxury />
      </div>
    </div>
  );
}

export default App;
