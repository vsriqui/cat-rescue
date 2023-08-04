import { useState } from 'react';

const SearchBreed = ({handleKittyChange, kittyState}) => {

  const handledBreedChange = (event) => {
    
    handleKittyChange(event.target.value)

  };

  const noEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <form>
      <input
        type="text"
        value={kittyState}
        onChange={handledBreedChange}
        onKeyDown={noEnter}
        placeholder="Enter preferred breed."
      />
    </form>
  );
};

export default SearchBreed;