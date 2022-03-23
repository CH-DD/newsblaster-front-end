// React stuff
import { useEffect, useState } from "react"; 
import { useParams, Link } from 'react-router-dom'; 

// Custom utils & components
import { getArticleById, getArticleComments } from "../utils/apiUtils.js"; // data fetching
import { formatDate, formatDateAndTime } from "../utils/formatDate"; 
import { pageTitle} from "../utils/pageTitle"; 

// Images
import defaultAvatar from '../images/user-avatar-placeholder.png'; 


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

   
    /////////////////////////////////////////////// TEMP
    // useEffect: get user data from API
    // let [userData, setUserData] = useState({});
    // let username = "happyamy2016";   // test value - returns object successfully

    // useEffect(() => {
    //   getUserData(username).then((fetchedData) => {  
    //     setUserData(fetchedData);
    //   });
    // }, [username]);
    ///////////////////////////////////////////////

    // Set page title - allow for data fetching delay
    if (isLoading) {
      pageTitle("Loading...");
    } else {
      pageTitle(currentArticle.title + " | Newsblaster");
    }
   
    // Conditional loading
    if (isLoading) return <p className="loading-message"><i className="fa-solid fa-spinner"></i>Loading</p>;

    // Comments class name function. If author of comment is same as main article author, append 'by-author' to class name  */
    function commentClassBasedOnAuthor(commentAuthor) {
      const articleAuthor = currentArticle.author;

      if(commentAuthor !== articleAuthor) {
        return "comment"; // default class 
      } else {
        return "comment by-author";  
      }
    }


    // Main content
    return (
      <main className = "article-page">

        <article>
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


            {/* Comments section */}

            <section className="comments" id="comments">
            
              <h3>
                <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> Comments 
                <span className="count"> ({currentArticle.comment_count})</span> 
              </h3>
              <a className="leave-comment" href="#leave-comment">Leave a Comment<i className="fa-solid fa-pen-to-square"></i></a>
              
              
              { // go through all comments in the array
              Comments.map((comment) => {       
                
                 
                return (
                    <div className={commentClassBasedOnAuthor(comment.author)}
                     key={comment.comment_id}>

                      <div className="meta">
                        <img className="avatar" src={defaultAvatar} alt="User avatar" />

                        <div className="author-and-date">
                          
                          <h5 className="comment-author">{comment.author}</h5>
                          <p className="date">{formatDateAndTime(comment.created_at)}</p>
                        </div>
                      </div>
                      
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