import Luxury from './components/Luxury';
import Sedan from './components/Sedan';
import Suv from './components/Suv';

function App() {
  return (
    <div className="flex justify-center items-center lg:h-[100vh] w-full py-[36px] ">
      <div className="w-[85%]  lg:w-[60%] lg:h-[70%] rounded-lg flex flex-col lg:flex-row">
        <Sedan />
        <Suv />
        <Luxury />
      </div>
    </div>
  );
}

export default App;
