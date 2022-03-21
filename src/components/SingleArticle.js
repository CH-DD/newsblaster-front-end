// import react stuff
import { useEffect, useState } from "react"; // may not need
import { getSingleArticle } from "../utils/api-utils.js"; // may not need
import { useParams } from 'react-router-dom';  // to get article_id

const SingleArticle = () => {  

    // get articles & topics data from api. 
    // - state allows props to be passed into child components.
    // - to sort articles, update sortBy state and params eg. getArticles(sortBy)
    // - display 'loading' message whilst retrieving data
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState("true");

    // state - individual article
    const [articleDetails, setArticleDetails] = useState({});
 
    useEffect(() => {
      getSingleArticle().then((theArticle) => {  
        setArticleDetails(theArticle);
        setIsLoading(false);
      });
    }, []);

    // useParams: grab current article id parameter
    const { article_id } = useParams();
    console.log(articles)


    return (
      <main className = "article-page">
        <article>
            <h2> { article_id }An individual article</h2>  
            {/* need to get the title in here ^^  */}
            {/* {props.article.title} */}
        </article>
      </main>
    )
};

// export component/s
export { SingleArticle };