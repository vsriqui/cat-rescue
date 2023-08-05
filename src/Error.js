import HomeButton from './Button'
import PropTypes from 'prop-types';


function Error({error}) {

  let displayedError = error || 'These are not the cats you\'re looking for.'

  return (
    
    <div>
      <HomeButton />
      <h2>{ displayedError }</h2>
    </div>
   
  )
} 

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error