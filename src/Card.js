import { Link } from 'react-router-dom';

import './Card.css';

function Card({breeds, url, id}) {

  // const catNames = require('cat-names')
  const breedNames = breeds.map(breed => breed.name).join('... ')
  return (
    <Link to={`/home/${id}`}>
    <div className='catainer'>
      <div className='cat' >
        <img src={url}></img>
      </div>
      <h2> {breedNames} </h2>
    </div>
    </Link>
  )
}

// '<h2>{catNames.random()}</h2>'

export default Card;