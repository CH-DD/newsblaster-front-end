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
    }, []);

    // Set page title 
    pageTitle(currentArticle.title + " | Newsblaster");
 
    // TO DO - Add in conditional loading logic
    return (
      <main className = "article-page">

        <article>
            <h2> { currentArticle.title }</h2>  
            <p> { currentArticle.body }</p>  

            <section className="post-meta">
                
                <p className="author-topic-and-date">by {currentArticle.author} · <Link className="topic" to={`/topics/${currentArticle.topic}`}>{currentArticle.topic}</Link> · {formatDate(currentArticle.created_at)}</p>


                <p className="comments-and-likes-count">
                    <Link className="comments-link" title="View Comments" to="#comments">
                        <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> {currentArticle.comment_count} 
                    </Link>
                     <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i> {currentArticle.votes} </p>
            </section>

            <section className="comments">
              <h3>Comments section to go here</h3>
            </section>


        </article>
      </main>
    )
};

// export component/s
export { SingleArticle };