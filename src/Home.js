import Cards from './Cards';
import SearchBreed from './SearchBreeds';
import './Home.css';
import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

function Home({cats}) {
  

  const [kittyState, setKittyState] = useState('');

  // Function to handle state update in the parent component
  const handleKittyChange = (newState) => {
    setKittyState(newState);
  };

  // console.log(kittyState, 'aaaaa')

  return (
    <div className='all'>
      <nav>
        <h1> Cat Rescue </h1>
        <SearchBreed handleKittyChange={handleKittyChange} kittyState={kittyState}/>
      </nav>
    <main>
      <Cards
      cats={cats}
      kittyState={kittyState}
      />
    </main>
  </div>
  )
} 


export default Home