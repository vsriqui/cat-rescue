import { useState } from 'react';
import './SearchBreed.css'



const SearchBreed = ({handleKittyChange, breedState}) => {

  const handledBreedChange = (event) => {
    
    handleKittyChange(event.target.value)

  };

  const noEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <div className='formdiv'>
    <form className='form'>
      <input
        type="text"
        value={breedState}
        onChange={handledBreedChange}
        onKeyDown={noEnter}
        placeholder="Enter preferred breed."
      />
    </form>
    </div>
  );
};

export default SearchBreed;