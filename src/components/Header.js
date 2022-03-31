// React stuff
import { Link } from 'react-router-dom'; 
import { useContext } from 'react'; // to access current user context
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Header = ( ) => {  

  // State: logged in user
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <nav>        
        <h3 id = "logo">
          <Link to="/" title="Go to home page">News<span>blaster </span> <small>blasting words in your face 24/7</small></Link>
        </h3>

        <Link to="/">News</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/user" title="Switch User Account">
          <p className="user"><i className="fa-solid fa-user-large"></i> { currentUser }</p>
        </Link>
  
      </nav>
    </header>
  )
};

// export component/s
export { Header };