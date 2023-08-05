
function getCats(que) {
  return fetch(`https://api.thecatapi.com/v1/images/${que}`, {
    method: "GET",  

  })
    .then((response) => {
      if (response.status >= 400 || !response.ok) {
        throw new Error('Server communication is not ready Meow.');
      }
      return response.json();
    });
}

function malformedCats(data) {
  
  return data.filter((cat)=> typeof(cat.id) === 'string' && typeof cat.url === 'string' && Array.isArray(cat.breeds) && cat.breeds.every(breed => breed.hasOwnProperty('name')))
}

function mapCats(data) {
  return data.map((cat) => getCats(`${cat.id}`))
} 

export {getCats, malformedCats, mapCats}