import Cards from './Cards';
import SearchBreed from './SearchBreeds';
import './Home.css';

function Home({cats, breedState, handleKittyChange, whiskerHunt}) {

  return (
    <div className='all'>
      <nav>
        <h1> Cat Rescue </h1>
        <SearchBreed handleKittyChange={handleKittyChange} breedState={breedState}/>
      </nav>
      <main>
        <Cards cats={cats} breedState={breedState} whiskerHunt={whiskerHunt}/>
      </main>
    </div>
  )
} 


export default Home