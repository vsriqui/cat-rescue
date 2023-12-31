import './SearchBreed.css'
import PropTypes from 'prop-types';

const SearchBreed = ({handleKittyChange, breedState}) => {

  const handledBreedChange = (event) => {
    
    handleKittyChange(event.target.value)

  };

  const noEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <div className='formdiv'>
    <form className='form'>
      <input
        type="text"
        value={breedState}
        onChange={handledBreedChange}
        onKeyDown={noEnter}
        placeholder="Enter preferred breed."
      />
    </form>
    </div>
  );
};

export default SearchBreed;

SearchBreed.propTypes = {
  handleKittyChange: PropTypes.func.isRequired,
  breedState: PropTypes.string.isRequired
};
