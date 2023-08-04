import './Cards.css';
import Card from './Card'

// function Cards({cats, breedState}) {

//   const lowerCaseBreedState = breedState.toLowerCase()

//   // const washCats = breedState ? cats.filter((cat) => cat.breeds[0].name.toLowerCase().includes(lowerCaseBreedState)) : cats;
//   // const washCats = breedState ? cats.filter((cat) => cat.breeds.map(breed => breed.name.toLowerCase().includes(lowerCaseBreedState))) : cats;
//   // const washCats = breedState ? cats.filter((cat) => cat.breeds.filter(breed => breed.name.toLowerCase().includes(lowerCaseBreedState))) : cats;
//   const washCats = breedState ? cats.filter((cat) => cat.breeds[0].name.toLowerCase().includes(lowerCaseBreedState)) : cats;

//   const catsMap = washCats.map((cat) => (
//     <Card 
//       key={cat.id} 
//       id={cat.id} 
//       url={cat.url} 
//       breeds={cat.breeds} 
//     />
//   ));
//   return (
//     <div className='cats'>
//       {catsMap}
//     </div>
//   )
// }

function Cards({ cats, breedState }) {
  // console.log(cats.breeds)
  const lowerCaseBreedState = breedState.toLowerCase();

  const washCats = breedState ? cats.filter((cat) => cat.breeds.some((breed) => breed.name.toLowerCase().includes(lowerCaseBreedState))) : cats;

  const catsMap = washCats.map((cat) => (
    <Card key={cat.id} id={cat.id} url={cat.url} breeds={cat.breeds} />
  ));

  return (
    <div className="cats">
      {catsMap}
    </div>
  );
}


export default Cards;