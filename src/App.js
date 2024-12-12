import './App.css';
import Navbar from './component/Navbar';
import AllDogs from './component/AllDogs';

function App() {

  return (
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <AllDogs />
      </header>
    </div>
    </>
    
  );
}

export default App;
