import './BreedCard.css';
import PropTypes from 'prop-types';


function BreedCard({name, description, origin, adaptability, affection, intelligence, dog, energy, social, life_span}) {

  return (
    <div >
      <h3>Breed: {name}</h3>
      <p>{description}</p>
      <h3>Origin: {origin}</h3>
      <div className='catstats'>
        <div>
          <h4>Adaptability: {adaptability}/5</h4>
        </div><div>
          <h4>Affection: {affection}/5</h4>
        </div><div>
          <h4>Intelligence: {intelligence}/5</h4>
        </div><div>
          <h4>Dog Friendly?: {dog}/5</h4>
        </div><div>
          <h4>Energy: {energy}/5</h4>
        </div><div>
          <h4>Socialability: {social}/5</h4>
        </div><div>
          <h4>Average lifespan: {life_span}</h4>
        </div>
      </div>
    </div>

  )
}


BreedCard.propTypes = {
  
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  adaptability: PropTypes.number.isRequired,
  affection: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  dog: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  social: PropTypes.number.isRequired,
  life_span: PropTypes.string.isRequired
};

export default BreedCard;