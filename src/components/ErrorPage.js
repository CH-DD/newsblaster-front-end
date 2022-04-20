// React stuff

// Custom utils & components
import { pageTitle } from "../utils/pageTitle"; 


const ErrorPage = () => {  

  // Set page title
  pageTitle( "Page Not Found | Newsblaster");

  return (
    <main className = "error-page text-page">
        <h1>Oops!</h1>
        <h3>We cannot find a page at this web address.</h3>
        <p>Go to <a href="/">home page</a>.</p>
    </main>
  )
};

// export component/s
export { ErrorPage };