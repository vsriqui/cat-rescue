import './BreedCard.css';
import PropTypes from 'prop-types';


function BreedCard({name, description, origin, adaptability, affection, intelligence, dog, energy, social, life_span}) {

  return (
    <div >
      <h3>Breed: {name}</h3>
      { description && <p>{description}</p> }
      {origin && <h3>Origin: {origin}</h3> }
      <div className='catstats'>
        <div>
          {adaptability && <h4>Adaptability: {adaptability}/5</h4> }
        </div><div>
          {affection && <h4>Affection: {affection}/5</h4> }
        </div><div>
          {intelligence && <h4>Intelligence: {intelligence}/5</h4> }
        </div><div>
          {dog && <h4>Dog Friendly?: {dog}/5</h4> }
        </div><div>
          {energy && <h4>Energy: {energy}/5</h4> }
        </div><div>
          {social && <h4>Socialability: {social}/5</h4> }
        </div><div>
          {life_span && <h4>Average lifespan: {life_span}</h4> }
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