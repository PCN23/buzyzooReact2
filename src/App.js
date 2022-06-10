import { useState } from 'react';
import './App.css';

function App() {


  const [carSize, setCarSize] = useState(20);

  return (
    <div className="App">
      <header className="App-header">
        <div className='pokemon'>
          <div className='competitor'>
            <button onClick={() => setCarSize(carSize + 10)}>Grow Car</button>
            <button>Shrink Car</button>
          </div>
          <div className='competitor'>
            <button>Grow Truck</button>
            <button>Shrink Truck</button>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
