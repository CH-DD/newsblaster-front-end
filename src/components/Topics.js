// React stuff

// Custom utils & components
import { pageTitle} from "../utils/pageTitle"; 

const Topics = () => {  

  // Set page title
  pageTitle( "Topics | Newsblaster");

  return (
    <main className = "topics-page">
        <h1>Topics content</h1>
    </main>
  )
};

// export component/s
export { Topics };