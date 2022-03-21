// React stuff
import { useEffect, useState } from "react"; 
import { useParams, Link } from 'react-router-dom'; 

// Custom utils & components
import { getSingleArticleById } from "../utils/apiUtils.js"; // data fetching
import { formatDate } from "../utils/formatDate"; 
import { pageTitle} from "../utils/pageTitle"; 


const SingleArticle = () => {  

    // State : current article data 
    const [currentArticle, setCurrentArticle] = useState({});
    
    // State: loading message whilst retrieving data
    const [isLoading, setIsLoading] = useState(true);

    // useParams: grab current article id parameter from URL
    const { article_id } = useParams();

    // useEffect: get article data from API
    useEffect(() => {
      getSingleArticleById(article_id).then((fetchedData) => {  
        setCurrentArticle(fetchedData);
        setIsLoading(false);
      });
    }, [article_id]);

     // Set page title - allow for data fetching delay
     if (isLoading) {
      pageTitle("Loading...");
    } else {
      pageTitle(currentArticle.title + " | Newsblaster");
    }
   
    // Conditional loading
    if (isLoading) return <p className="loading-message"><i className="fa-solid fa-spinner"></i>Loading</p>;

    return (
      <main className = "article-page">

        <article>
            <section className="post-meta">
                <p className="author-topic-and-date  no-border"><Link className="topic" to={`/topics/${currentArticle.topic}`}>{currentArticle.topic}</Link> · {formatDate(currentArticle.created_at)}</p>
            </section>

            <h2> { currentArticle.title }</h2>  
            <p> { currentArticle.body }</p>  

            <section className="post-meta">
                
                <p className="author-topic-and-date">by {currentArticle.author}</p>

                <p className="comments-and-likes-count">
                  <a className="comments-link" title="View Comments" href="#comments">
                    <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> {currentArticle.comment_count}
                  </a>
                  <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i> {currentArticle.votes} </p>
            </section>

            <section id="comments">
              <h3>Comments section to go here</h3>
            </section>


        </article>
      </main>
    )
};

// export component/s
export { SingleArticle };