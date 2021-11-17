import { React, useState } from 'react';
import './Cars.css';
import cars from './Cars';
import Cars2 from './Cars2';

function App() {

  const [Cars, setCars] = useState(cars);
  const handleClear = () => {
    return(
      setCars([])
    )
  }
  return (
    <div className="cars">
      <h3>New Release Toyota Cars</h3>
      <h4>{Cars.length} Cars are Listed</h4>
      <Cars2 Cars={Cars} />
      {cars.length !== 0 ? (
      <button onClick={handleClear}>Clear All</button>) : (
      <button onClick={() => setCars(cars)}>Reset</button>)}
    </div>
  );
}

export default App;
