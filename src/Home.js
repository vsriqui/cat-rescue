import Cards from './Cards';
import SearchBreed from './SearchBreeds';
import './Home.css';
import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

function Home({cats, breedState, handleKittyChange}) {
  





  return (
    <div className='all'>
      <nav>
        <h1> Cat Rescue </h1>
        <SearchBreed handleKittyChange={handleKittyChange} breedState={breedState}/>
      </nav>
      <main>
        <Cards cats={cats} breedState={breedState} />
      </main>
    </div>
  )
} 


export default Home