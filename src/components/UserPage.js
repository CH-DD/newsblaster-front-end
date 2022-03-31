// React stuff
import { useContext } from 'react'; // to access current user context
import { CurrentUserContext } from '../contexts/CurrentUserContext';

// Custom utils & components
import { pageTitle } from "../utils/pageTitle"; 

// Set page title
pageTitle( "Select a User | Newsblaster");

const UserPage = () => {  

    // State: logged in user
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    return (
      <main className = "user-page">
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
          <h1> { currentUser }</h1>
          <h3>Switch account</h3>
          <button>
            Usernames to go here
          </button>
          <p>Note: This is 'demo' functionality, to test posting / deleting comments from different user accounts.  In production, the would set up a login form and authentication </p>
      </main>
    )
};

// export component/s
export { UserPage };