import Card from './Card'

function Cards({cats}) {
  console.log(cats, 'Cards')
  return cats.map( cats => {
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

}


export default Cards;