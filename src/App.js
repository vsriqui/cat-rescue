// import logo from './logo.svg';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import {getCats, malformedCats, mapCats} from './apiCalls-Functions'
import Home from './Home'
import Error from './404'


function App() {

  const [cats, setCats] = useState([]);

  // ''

  // useEffect(() => {
  //   const fetchCats = () => {
  //     getCats('search?limit=10&has_breeds=1&order=ASC&api_key=sNw9kk1ppt2nofxJ8GLOdkJzKycbk6iOmsQsydl8v4rRmaPkXomMGWamZwmhkH4y')
  //       .then((bigMeow) => Promise.all(mapCats(bigMeow)))
  //       .then((catData) => malformedCats(catData))
  //       .then((catData) => setCats(catData))
  //       .catch((hisss) => alert(hisss));
  //   };
  //   fetchCats();
  // }, [])
  

// console.log(cats, 'dat')




  return (

    <Routes>
      
        <Route exact path='/' element={<Home />} />

        <Route path='*' element={<Error />}/>

      
    </Routes>

  );
}

export default App;
