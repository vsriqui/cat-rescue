
import './Card.css';

function Card({breeds, url, id}) {

  const catNames = require('cat-names')

  return (
    <div>
      <div className='cat' >
        <img src={url}></img>
      </div>
      <h2>{catNames.random()}</h2>
    </div>
  )
}


export default Card;