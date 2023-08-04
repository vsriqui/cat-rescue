
import './Card.css';

function Card({breeds, url, id}) {
  console.log('0', breeds, '1', url, '2', id)
  return (

    <div className='cat' >


      <img src={url}></img>
    </div>

  )
}


export default Card;