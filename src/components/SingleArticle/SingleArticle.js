// React stuff
import { useEffect, useState } from "react"; 
import { useParams, Link } from 'react-router-dom'; 

// Custom utils & components
import { getArticleById, getArticleComments } from "../../utils/apiUtils"; // data fetching
import { formatDate, formatDateAndTime } from "../../utils/formatDate"; 
import { pageTitle} from "../../utils/pageTitle"; 
import { Comments } from "./Comments";


const SingleArticle = () => {  

    // State : current article data, article comments
    const [currentArticle, setCurrentArticle] = useState({});
    const [comments, setComments] = useState({});
  
    // State: loading message whilst retrieving data
    const [isLoading, setIsLoading] = useState(true);

    // useParams: grab current article id parameter from URL
    const { article_id } = useParams();

    // useEffect: get article data from API
    useEffect(() => {
      getArticleById(article_id).then((fetchedData) => {  
        setCurrentArticle(fetchedData);
        // setIsLoading(false);
      });
    }, [article_id]);

    // useEffect: get comments from API
    useEffect(() => {
      getArticleComments(article_id).then((fetchedData) => {  
        setComments(fetchedData);
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

    // Main content
    return (
      <main className = "article-page">

        <article>

          <section className="main-content">

            <section className="post-meta before-heading">
                <p className="author-topic-and-date"><Link className="topic" to={`/topics/${currentArticle.topic}`}>{currentArticle.topic}</Link> · {formatDate(currentArticle.created_at)}</p>
            </section>

            <h2> { currentArticle.title }</h2>  

            <section className="post-meta after-heading">

                <p className="author-topic-and-date">by <strong>{currentArticle.author}</strong></p>

                <p className="comments-and-likes-count">
                  <a className="comments-link" title="View Comments" href="#comments">
                    <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> {currentArticle.comment_count}
                  </a>
                  <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i> {currentArticle.votes} </p>

            </section>

            <p> { currentArticle.body }</p> 

          </section>

          {/* Comments section - pass props required into component */}
          <Comments 
            article_id={ article_id } 
            currentArticle = { currentArticle } 
            comments={ comments }
            formatDateAndTime = { formatDateAndTime }
          />

        </article>
      </main>
    )
};

// export component/s
export { SingleArticle };