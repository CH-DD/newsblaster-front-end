// React stuff

// Custom utils & components
import { pageTitle } from "../utils/pageTitle"; 


const ErrorPage = () => {  

  // Set page title
  pageTitle( "Error | Newsblaster");

  return (
    <main className = "error-page">
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
        <h1>Oops!</h1>
        <h3>We cannot find that page right now.</h3>
        <p>Go to <a href="/">home page</a>.</p>
    </main>
  )
};

// export component/s
export { ErrorPage };