import { useState } from 'react';
import './App.css';

function App() {


  const [carSize, setCarSize] = useState(30);
  const [truckSize, setTruckSize] = useState(30);

  return (
    <div className="App">
      <header className="App-header">
        <div className='pokemon'>
          <div className='competitor'>
            <p style={{ fontSize: `${carSize}px` }}>🐝 : {carSize}</p>
            <button onClick={() => setCarSize(carSize + 10)}>Grow Bee</button>
            <button onClick={() => setCarSize(carSize - 10)}>Shrink Bee</button>
          </div>
          <div className='competitor'>
            <p style={{ fontSize: `${truckSize}px` }}>🦜 : {truckSize}</p>
            <button onClick={() => setTruckSize(truckSize + 10)}>Grow Parrot</button>
            <button onClick={() => setTruckSize(truckSize - 10)}>Shrink Parrot</button>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
