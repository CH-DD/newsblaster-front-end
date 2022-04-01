// React stuff
import { useContext, useState } from 'react'; // to access current user context
import { CurrentUserContext } from '../contexts/CurrentUserContext';

// Custom utils & components
import { pageTitle } from "../utils/pageTitle"; 


const UserPage = () => {  

    // Set page title
    pageTitle("Select User Account | Newsblaster");

    // Context: logged in user
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    // Values: list of authors to choose from
    const usersList = ["tickle122", "grumpy19", "happyamy2016", "cooljmessy", "weegembump", "jessjelly"];

    // consider importing list of users and accessing avatars
    return (
      <main className = "user-page text-page">

          <h2>Select a User Account...</h2>

          <section className="user-buttons">
            { usersList.map((user) => {

              // assign unique class for current user's name
              function assignClass() {
                if (user === currentUser) {
                  return "current-user"
                }
              }

              return (
                <button 
                  key={user}
                  title="Use this account" 
                  id="likes-button" 
                  className={assignClass(user)} 
                  onClick={() => setCurrentUser(user)}>
                {user}</button>
              )
            }) }
          </section>


          <p className="disclaimer"><strong>Note:</strong> This is demo functionality - to test posting and deleting article comments as different users. When the app is refreshed, the user is reset to 'tickle122' (the default account). On a production site, users would sign up/login.</p>
          
      </main>
    )
};

// export component/s
export { UserPage };