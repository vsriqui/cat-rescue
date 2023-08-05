import './BreedCard.css';

function BreedCard({id, name, description, origin, adaptability, affection, intelligence, dog, energy, social, life_span}) {

  console.log(name)

  return (
    <div >
      <h3>Breed: {name}</h3>
      <p>{description}</p>
      <h3>Origin: {origin}</h3>
      <div className='catstats'>
        <div>
          <h3>Adaptability: {adaptability}/5</h3>
        </div><div>
          <h3>Affection: {affection}/5</h3>
        </div><div>
          <h3>Intelligence: {intelligence}/5</h3>
        </div><div>
          <h3>Dog Friendly?: {dog}/5</h3>
        </div><div>
          <h3>Energy: {energy}/5</h3>
        </div><div>
          <h3>Socialability: {social}/5</h3>
        </div><div>
          <h3>Average lifespan: {life_span}</h3>
        </div>
      </div>
    </div>

  )
}



export default BreedCard;



{/* <BreedCard key={cat.id} name={cat.name} description={cat.description} origin={cat.origin} adaptability={cat.adaptability} affection={cat.affection_level} intelligence={cat.intelligence} dog={cat.dog_friendly} energy={cat.energy_level} social={cat.social_needs} life_span={cat.life_span}/> */}