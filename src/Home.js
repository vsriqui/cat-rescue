import Cards from './Cards';
import SearchBreed from './SearchBreeds';
import './Home.css';
import PropTypes from 'prop-types';


function Home({cats, breedState, handleKittyChange, whiskerHunt}) {

  return (
    <div className='all'>
      <nav>
        <h1> ᓚᘏᗢ - Cat Rescue </h1>
        <SearchBreed handleKittyChange={handleKittyChange} breedState={breedState}/>
      </nav>
      <main>
        <Cards cats={cats} breedState={breedState} whiskerHunt={whiskerHunt}/>
      </main>
    </div>
  )
} 


Home.propTypes = {
  handleKittyChange: PropTypes.func.isRequired,
  breedState: PropTypes.string.isRequired,
  cats: PropTypes.array.isRequired,
  whiskerHunt: PropTypes.func.isRequired
};

export default Home