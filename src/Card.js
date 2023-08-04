import { Link } from 'react-router-dom';

import './Card.css';

function Card({cats, breeds, url, id, whiskerHunt}) {

  
  const handleWhiskerHunt = () => {
    whiskerHunt(cats, id);
  };

  // const catNames = require('cat-names')
  const breedNames = breeds.map(breed => breed.name).join('. ')
  return (
    <Link to={`/${id}`} onClick={handleWhiskerHunt}>
    <div className='catainer'>
      <div className='cat' >
        <img src={url} alt='A lovely feline.'></img>
      </div>
      <h2> {breedNames} </h2>
    </div>
    </Link>
  )
}

// '<h2>{catNames.random()}</h2>'

export default Card;