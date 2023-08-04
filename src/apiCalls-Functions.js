// https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=DESC&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y

// https://api.thecatapi.com/v1/images/


function getCats(que) {
  return fetch(`https://api.thecatapi.com/v1/images/${que}`, {
    method: "GET",
    // cors: "no-cors",
    

  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Server communication is not ready Meow.');
      }
      return response.json();
    });
}

function malformedCats(data) {
  return data.filter((cat)=>  cat.id && cat.url && cat.breeds)
}

function mapCats(data) {
  return data.map((cat) => getCats(`${cat.id}`))
} 

export {getCats, malformedCats, mapCats}