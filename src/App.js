import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';

function App() {

  const [animals, setAnimals] = useState (['Scarlet macaw', 'Sloth', 'Coati', 'Toucans', 'Crocodiles']);
  const [carSize, setCarSize] = useState(30);
  const [truckSize, setTruckSize] = useState(30);
  const [zooIsOpen, setZooIsOpen] = useState(true);


  function handleMacawClick() {
    animals.push('macaw');
    setAnimals(animals.slice());
  }
  function handleSlothClick() {
    animals.push('sloth');
    setAnimals(animals.slice());
  }
  function handleCoatiClick() {
    animals.push('coati');
    setAnimals(animals.slice());
  }
  function handleToucansClick() {
    animals.push('toucans');
    setAnimals(animals.slice());
  }
  function handleCrocodilesClick() {
    animals.push('crocodiles');
    setAnimals(animals.slice());
  }
  function handleRetireAnimal() {
    animals.pop();
    setAnimals(animals.slice());
  }



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
        <OpenClosedSign zooIsOpen={zooIsOpen}/>
        <button onClick={() => setZooIsOpen(!zooIsOpen)}>toggle zoo</button>
        <AnimalList animals={animals}/>
        <button onClick={handleMacawClick}>Add macaw</button>
        <button onClick={handleSlothClick}>Add sloth</button>
        <button onClick={handleCoatiClick}>Add coati</button>
        <button onClick={handleToucansClick}>Add toucans</button>
        <button onClick={handleCrocodilesClick}>Add crocodiles</button>
        <button onClick={handleRetireAnimal}>Goodbye animal</button>      
      </header>
    </div>
  );
}

export default App;
