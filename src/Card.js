
import './Card.css';

function Card({breeds, url, id}) {
  
  return (
    <div className='cat' >
      <img src={url}></img>
    </div>
  )
}


export default Card;