import './Cards.css';
import Card from './Card'

function Cards({ cats, breedState, whiskerHunt}) {

  const lowerCaseBreedState = breedState.toLowerCase();

  const washCats = breedState ? cats.filter((cat) => cat.breeds.some((breed) => breed.name.toLowerCase().includes(lowerCaseBreedState))) : cats;

  const catsMap = washCats.map((cat) => (
    <Card key={cat.id} id={cat.id} url={cat.url} breeds={cat.breeds} whiskerHunt={whiskerHunt} cats={cats}/>
  ));

  return (
    <div className="cats">
      {catsMap}
    </div>
  );
}


export default Cards;