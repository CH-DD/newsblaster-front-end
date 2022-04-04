// React stuff
import { useContext } from 'react'; // to access current user context
import { CurrentUserContext } from '../contexts/CurrentUserContext';

// Custom utils & components
import { pageTitle } from "../utils/pageTitle"; 


const UserPage = () => {  

    // Set page title
    pageTitle("Select User Account | Newsblaster");

    // Context: logged in user
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
   

    // Values: list of authors to choose from. Later: potentially pull these from APi, and consider avatars.
    const usersList = ["tickle122", "grumpy19", "happyamy2016", "cooljmessy", "weegembump", "jessjelly"];

    return (
      <main className = "user-page text-page">

        <h2>Select a User Account...</h2>

        <section className="user-buttons">
          { usersList.map((user) => {
            
            // assign unique class for current user's name
            function assignClass() {
              if (user === currentUser) {
                return "current-user";
              }
            }

            return (
              <button 
                onClick={() => setCurrentUser(user)}
                className={assignClass(user)} 
                key={user}
                title="Use this account" 
                id="likes-button" 
              >
                {user}
              </button>
            )
          }) }
        </section>

        <section className="pullout">
          <p className="disclaimer"><strong>Note:</strong> This is a demo feature - to test posting & deleting  comments as different users. In reality, users would sign up/login using a typical form.</p>
        </section>
      </main>
    )
};

// export component/s
export { UserPage };