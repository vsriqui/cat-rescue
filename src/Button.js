import { Link } from 'react-router-dom';

function HomeButton() {
    

return (
  <Link to={`/`}>
    <button> Go home. Meow. </button>
  </Link>
);

}

export default HomeButton