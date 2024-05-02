import React, { useState } from 'react';

function NamePicker() {
  const [names, setNames] = useState([
    'saw', 'smi', 'spn', 'rpm', 'spm', 'spy', 'vrs', 'rca'
  ]);
  const [pickedName, setPickedName] = useState(null);

  const handlePickName = () => {
    if (names.length === 0) {
      alert('All names have been picked!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenName = names[randomIndex];
    setPickedName(chosenName);

    // Remove the picked name from the array
    setNames(names.filter((name) => name !== chosenName)); 
  };

  return (
    <div>
      <button onClick={handlePickName}>Pick a Name</button>
      {pickedName && <h2>Picked Name: {pickedName}</h2>}
    </div>
  );
}

export default NamePicker;
