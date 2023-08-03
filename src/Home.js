import Cards from './Cards';
import SearchBreed from './SearchBreeds';
import './Home.css';

function Home({cats}) {
  console.log(cats, 'Home')

  return (
    <div className='all'>
      <nav>
        <h1> Cat Rescue </h1>
        <SearchBreed />
      </nav>
    <main>
      <Cards
      cats={cats}
      />
    </main>
  </div>
  )
} 


export default Home