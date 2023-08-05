// // import logo from './logo.svg';
// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { useEffect, useState } from 'react';
// import './App.css';
// import {getCats, malformedCats, mapCats} from './apiCalls-Functions'
// import Home from './Home'
// import Error from './Error'
// import CatInfo from './CatInfo'


// function App() {

//   const [cats, setCats] = useState([]);
//   const [error, setError] = useState('');
//   const [breedState, setBreedState] = useState('');

//   const [catInfo, setCatInfo] = useState({})

//   const handleKittyChange = (newState) => {
//     setBreedState(newState);
//   };

//   const whiskerHunt = (catsParam, idParam) => {  
//     const aCat = catsParam.find(cat => cat.id === idParam)
//     setCatInfo(aCat)
//   }

//   console.log(catInfo.id, 'IM HERE MEOWWWWWWW')

// // &has_breeds=1 //

//   useEffect(() => {
//     const fetchCats = () => {
//       getCats('search?limit=10&has_breeds=1&order=RAND&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y')
//         .then((bigMeow) => Promise.all(mapCats(bigMeow)))
//         .then((catData) => malformedCats(catData))
//         .then((catData) => {
//           setCats(catData);
//           setError('');
//         })
//         .catch((hisss) => setError(hisss.message));
        
//     };
//     fetchCats(); 
//   }, []);


//     if (!catInfo.id) {

//     return <Home cats={cats} breedState={breedState} handleKittyChange={handleKittyChange} whiskerHunt={whiskerHunt} />;
//   }

//   return (
//     <Routes>
//       { !error && <Route path='/' element={<Home cats={cats} breedState={breedState} handleKittyChange={handleKittyChange} whiskerHunt={whiskerHunt} />} />}
//       <Route path='/:id' element={<CatInfo catInfo={catInfo}/>} />
//       <Route path='*' element={<Error error={error}/>}/>
      
//     </Routes>
    
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { getCats, malformedCats, mapCats } from './apiCalls-Functions';
import Home from './Home';
import Error from './Error';
import CatInfo from './CatInfo';

function App() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState('');
  const [breedState, setBreedState] = useState('');
  const [catInfo, setCatInfo] = useState({});

  const handleKittyChange = (newState) => {
    setBreedState(newState);
  };

  const whiskerHunt = (catsParam, idParam) => {
    const aCat = catsParam.find((cat) => cat.id === idParam);
    setCatInfo(aCat);
  };

  console.log(catInfo.id, 'IM HERE MEOWWWWWWW');

  useEffect(() => {
    const fetchCats = () => {
      getCats(
        'search?limit=10&has_breeds=1&order=RAND&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y'
      )
        .then((bigMeow) => Promise.all(mapCats(bigMeow)))
        .then((catData) => malformedCats(catData))
        .then((catData) => {
          setCats(catData);
          setError('');
        })
        .catch((hisss) => setError(hisss.message));
    };
    fetchCats();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!catInfo.id && location.pathname !== '/' && !error) {
      navigate('/');
    }
  }, [navigate, catInfo, location]);

  if (!catInfo.id && !error) {
    return (
      <Home cats={cats} breedState={breedState} handleKittyChange={handleKittyChange} whiskerHunt={whiskerHunt} />
      )
  }

  return (
    <Routes>
      { !error && <Route path='/' element={<Home cats={cats} breedState={breedState} handleKittyChange={handleKittyChange} whiskerHunt={whiskerHunt} />} />}
      <Route path='/:id' element={<CatInfo catInfo={catInfo} />} />
      <Route path='*' element={<Error error={error} />} />
    </Routes>
  );
}

export default App;