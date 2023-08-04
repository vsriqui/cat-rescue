import './Cards.css';
import Card from './Card'

function Cards({cats, kittyState}) {

  const lowerCaseKittyState = kittyState.toLowerCase()

  const washCats = kittyState ? cats.filter((cat) => cat.breeds[0].name.toLowerCase().includes(lowerCaseKittyState)) : cats;

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