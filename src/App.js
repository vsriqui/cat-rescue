// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import {getCats, malformedCats, mapCats} from './apiCalls-Functions'

function App() {

  const [cats, setCats] = useState([]);

  // ''

  useEffect(() => {
    const fetchCats = () => {
      getCats('search?limit=10&has_breeds=1&order=RAND&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y')
        .then((bigMeow) => Promise.all(mapCats(bigMeow)))
        .then((catData) => malformedCats(catData))
        .then((catData) => setCats(catData))
        .catch((hisss) => alert(hisss));
    };
    fetchCats();
  }, [])
  

console.log(cats, 'dat')




  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reloa.
        </p>

      </header>
    </div>
  );
}

export default App;
