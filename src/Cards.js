import './Cards.css';
import Card from './Card'

function Cards({cats, breedState}) {

  const lowerCaseBreedState = breedState.toLowerCase()

  const washCats = breedState ? cats.filter((cat) => cat.breeds[0].name.toLowerCase().includes(lowerCaseBreedState)) : cats;

  const catsMap = washCats.map((cat) => (
    <Card 
      key={cat.id} 
      id={cat.id} 
      url={cat.url} 
      breeds={cat.breeds} 
    />
  ));
  return (
    <div className='cats'>
      {catsMap}
    </div>
  )
}


export default Cards;