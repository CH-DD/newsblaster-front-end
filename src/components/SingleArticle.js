// React stuff
import { useEffect, useState } from "react"; 
import { useParams, Link } from 'react-router-dom'; 

// Custom utils & components
import { getArticleById, getArticleComments } from "../utils/apiUtils.js"; // data fetching
import { formatDate, formatDateAndTime } from "../utils/formatDate"; 
import { pageTitle} from "../utils/pageTitle"; 


const SingleArticle = () => {  

    // State : current article data, article comments
    const [currentArticle, setCurrentArticle] = useState({});
    const [Comments, setComments] = useState({});
  
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
            <section className="post-meta before-heading">
                <p className="author-topic-and-date"><Link className="topic" to={`/topics/${currentArticle.topic}`}>{currentArticle.topic}</Link> · {formatDate(currentArticle.created_at)}</p>
            </section>

            <h2> { currentArticle.title }</h2>  

            <section className="post-meta after-heading">
                
                <p className="author-topic-and-date">by {currentArticle.author}</p>

                <p className="comments-and-likes-count">
                  <a className="comments-link" title="View Comments" href="#comments">
                    <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> {currentArticle.comment_count}
                  </a>
                  <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i> {currentArticle.votes} </p>

            </section>
            <p> { currentArticle.body }</p>  

            
            {/* Comments */}

            <section className="comments" id="comments">
              <h3>
                <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> Comments 
                <span className="count"> ({currentArticle.comment_count})</span> 
              </h3>
              <a className="leave-comment" href="#leave-comment">Leave a Comment<i class="fa-solid fa-pen-to-square"></i></a>
              

              { // go through all comments in the array
              Comments.map((comment) => {

                  return (
                    <div className="comment" key={comment.comment_id}>
                      <h5 className="author">{comment.author}</h5>
                      <p className="date">{formatDateAndTime(comment.created_at)}</p>
                      <p className="body">{comment.body}</p>
                    </div>
                  ) 
                })
                
              }
            </section>

            <section className="leave-comment" id="leave-comment">
              <h4>Comments form to go here</h4>
            </section>

        </article>
      </main>
    )
};

// export component/s
export { SingleArticle };