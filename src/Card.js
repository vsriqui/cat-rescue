import { Link } from 'react-router-dom';

import './Card.css';
import PropTypes from 'prop-types';



function Card({cats, breeds, url, id, whiskerHunt}) {

  
  const handleWhiskerHunt = () => {
    whiskerHunt(cats, id);
  };

 
  const breedNames = breeds.map(breed => breed.name).join('. ')

  return (
    <Link to={`id/${id}`} onClick={handleWhiskerHunt}>
    <div className='catainer'>
      <div className='cat' >
        <img src={url} alt='A lovely feline.' />
      </div>
      <h2> {breedNames} </h2>
    </div>
    </Link>
  )
}

Card.propTypes = {
  whiskerHunt: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  breeds: PropTypes.array.isRequired,
  cats: PropTypes.array.isRequired

};

export default Card;