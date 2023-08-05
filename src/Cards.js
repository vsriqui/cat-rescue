import './Cards.css';
import Card from './Card'
import PropTypes from 'prop-types';


function Cards({ cats, breedState, whiskerHunt}) {

  const lowerCaseBreedState = breedState.toLowerCase();

  const washCats = breedState ? cats.filter((cat) => cat.breeds.some((breed) => breed.name.toLowerCase().includes(lowerCaseBreedState))) : cats;

  const catsMap = washCats.map((cat) => (
    <Card key={cat.id} id={cat.id} url={cat.url} breeds={cat.breeds} whiskerHunt={whiskerHunt} cats={cats}/>
  ));

 
  return (
    <div className="cats">
      {washCats.length > 0 && catsMap}
      {!washCats.length && breedState !== '' && <h2 className='cuery'>Your cat query is questionable.</h2>}
    </div>
  );

  


}


Cards.propTypes = {
  whiskerHunt: PropTypes.func.isRequired,
  breedState: PropTypes.string.isRequired,
  cats: PropTypes.array.isRequired
};

export default Cards;