import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';
import CustomButton from './CustomButton';


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
        <h1>Welcome to the costa rican zoo. </h1>
        <div className='pokemon'>
          <div className='competitor'>
            <p style={{ fontSize: `${carSize}px` }}>🐝 : {carSize}</p>
            <CustomButton onClick={() => setCarSize(carSize + 10)}>Grow Bee</CustomButton>
            <CustomButton onClick={() => setCarSize(carSize - 10)}>Shrink Bee</CustomButton>
          </div>
          <div className='competitor'>
            <p style={{ fontSize: `${truckSize}px` }}>🦜 : {truckSize}</p>
            <CustomButton onClick={() => setTruckSize(truckSize + 10)}>Grow Parrot</CustomButton>
            <CustomButton onClick={() => setTruckSize(truckSize - 10)}>Shrink Parrot</CustomButton>
          </div>
        </div>
        <OpenClosedSign zooIsOpen={zooIsOpen}/>
        <CustomButton onClick={() => setZooIsOpen(!zooIsOpen)}>toggle zoo</CustomButton>
        <AnimalList animals={animals}/>
        <CustomButton onClick={handleMacawClick} coolColor="gold">Add macaw</CustomButton>
        <CustomButton onClick={handleSlothClick}>Add sloth</CustomButton>
        <CustomButton onClick={handleCoatiClick}>Add coati</CustomButton>
        <CustomButton onClick={handleToucansClick}>Add toucans</CustomButton>
        <CustomButton onClick={handleCrocodilesClick}>Add crocodiles</CustomButton>
        <CustomButton onClick={handleRetireAnimal}>Goodbye animal</CustomButton>      
      </header>
    </div>
  );
}

export default App;
