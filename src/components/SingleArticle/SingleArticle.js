// React stuff
import { useEffect, useState, useContext } from "react"; 
import { useParams, useNavigate } from 'react-router-dom'; 

// Custom utils & components
import { getArticleById, getArticleComments, postComment } from "../../utils/apiUtils"; // data fetching
import { formatDate, formatDateAndTime } from "../../utils/formatDate"; 
import { pageTitle} from "../../utils/pageTitle"; 
import { Comments } from "./Comments";
import { Likes } from "./Likes";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


const SingleArticle = () => {  

    // State : current article data, article comments
    const [currentArticle, setCurrentArticle] = useState({});
    const [comments, setComments] = useState({});
  
    // State: loading message whilst retrieving data
    const [isLoading, setIsLoading] = useState(true);

    // useParams: grab current article id parameter from URL
    const { article_id } = useParams();

    // State: Error handling when getting article data
    const [error, setError] = useState(null);

    // useEffect: get article data from API
    useEffect(() => {
      getArticleById(article_id)
        .then((fetchedData) => {  
          setCurrentArticle(fetchedData);
        })
        .catch((err) => {
          //  set error message if article not found
          setError("The article you are looking for does not seem to exist.");
          setIsLoading(false);
        });
    }, [article_id, comments]); // reloads when article id or comments are updated

    // useEffect: get comments from API
    useEffect(() => {
      getArticleComments(article_id)
        .then((fetchedData) => {  
          setComments(fetchedData);
          setIsLoading(false); // cancel loading once comments received
        });
    }, [article_id, comments]); // reloads when article id or comments are updated

   
    // Set page title - allow for data fetching delay
    if (isLoading) {
      pageTitle("Loading...");
    } else if (error) {
      pageTitle("Article Not Found  | Newsblaster");
    } else {
      pageTitle(currentArticle.title + " | Newsblaster");
    }
   

    // Leave comment functionality ////////////////////////

    // useNavigate: access navigation history & redirect after form submission
    const navigate = useNavigate();

    // State: logged in user
    const { currentUser } = useContext(CurrentUserContext);

    // State: to store form input values
    const [ commentBody, setCommentBody ] = useState("");             
    const [ commentAuthor ] = useState(currentUser);  

    // Handle form submission
    const handleFormSubmit = (event) => {
      event.preventDefault(); // prevent default page refresh when button is pressed
      postComment(article_id, commentBody, commentAuthor);  // submit comment data
      event.target.reset();  // clear form input field
      navigate(`/articles/${article_id}/#comments`);  // scroll to #comments section
    }


    // Conditional loading
    if (isLoading) return <p className="loading-message"><i className="fa-solid fa-spinner"></i>Loading</p>;

    else if (error) return <main className="error-page text-page"><h1>Oh no!</h1><h3>{error}</h3><p>Go to <a href="/">home page</a>.</p></main>;

    // Main content
    return (
      <main className = "article-page">

        <article>

          <section className="main-content">

            <section className="post-meta before-heading">
                <p className="author-topic-and-date"><span className="topic">{currentArticle.topic}</span> · {formatDate(currentArticle.created_at)}</p>
            </section>

            <h2> { currentArticle.title }</h2>  

            <section className="post-meta after-heading">

                <p className="author-topic-and-date">by <strong>{currentArticle.author}</strong></p>

                <p className="comments-and-likes-count">
                  <a className="comments-link" title="View Comments" href="#comments">
                    <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> {currentArticle.comment_count}
                  </a>

                  <Likes 
                    likes={ currentArticle.votes } 
                    article_id = { article_id }
                  />
                </p>

            </section>

            <p> { currentArticle.body }</p> 

          </section>

          {/* Comments section - pass props required into component */}
          <Comments 
            article_id={ article_id } 
            currentArticle = { currentArticle } 
            comments={ comments } 
            setComments={ setComments } 
            formatDateAndTime = { formatDateAndTime }
            handleFormSubmit = { handleFormSubmit } 
            commentBody = { commentBody } 
            setCommentBody = { setCommentBody } 
            commentAuthor  = { commentAuthor } 
          />

        </article>
      </main>
    )
};

// export component/s
export { SingleArticle };