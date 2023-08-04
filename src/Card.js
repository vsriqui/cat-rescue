
import './Card.css';

function Card({breeds, url, id}) {

  const catNames = require('cat-names')

  return (
    <div className='catainer'>
      <div className='cat' >
        <img src={url}></img>
      </div>

    </div>
  )
}

// '<h2>{catNames.random()}</h2>'

export default Card;