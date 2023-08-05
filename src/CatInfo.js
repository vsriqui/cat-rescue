import BreedCard from './BreedCard'
import HomeButton from './Button';
import {useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import './CatInfo.css'
import PropTypes from 'prop-types';


function CatInfo({catInfo}) {    

    const navigate = useNavigate();

    useEffect(()=>{
    if (!catInfo.breeds) {
      navigate('/');
    }
  }, [navigate, catInfo.breeds])

  if (catInfo.breeds) {
    const breedMap = catInfo.breeds.map((cat, i) => (
       <BreedCard key={catInfo.id + i} name={cat.name} description={cat.description} origin={cat.origin} adaptability={cat.adaptability} affection={cat.affection_level} intelligence={cat.intelligence} dog={cat.dog_friendly} energy={cat.energy_level} social={cat.social_needs} life_span={cat.life_span}/>
    ));

  return (
    <div>
      <div>
      <h1> Hi I'm ready for adoption. </h1>
      <p> You can call 555 - 555 - 5555 if you're interested! </p>
      <HomeButton />
      </div>
      <img src={catInfo.url} alt='A lovely cat.' />
      {breedMap}
    </div>
  );
  }

}


CatInfo.propTypes = {
  catInfo: PropTypes.object.isRequired
};


export default CatInfo;










