import './Cards.css';
import Card from './Card'

function Cards({cats}) {
  console.log(cats, 'Cards')
  const catsMap = cats.map( cats => {
    return(
      
      <Card
      key={cats.id} 
      id={cats.id}
      url={cats.url}
      breeds={cats.breeds}
      />
      

    )

  }
  
  )


  return (
    <div className='cats'>
      {catsMap}
    </div>
  )
}


export default Cards;