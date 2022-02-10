import { Link } from 'react-router-dom';  // handles links

const ArticlePreview = (props) => {  

    /* date formatter 
        - converts dates from ISO8601 to more readable format 
        - formatting style based on user's locale
        - could consider converting to a helper function in external file
    */
    const date = props.article.created_at; 
    let formattedDate = "";

    function formatDate(date) {
        return new Date(date).toLocaleDateString(navigator.language, {
            year: '2-digit', month: 'short', day: '2-digit'
        });
    }
    formattedDate = formatDate(date);

    // article content
    return (
        <>
            <h2><Link to={`/articles/${props.article.article_id}`} >
            {props.article.title}</Link>
            </h2>
            
            <section className="post-meta">
                
                <p className="author-topic-and-date">by {props.article.author} · <Link className="topic" to={`/topics/${props.article.topic}`}>{props.article.topic}</Link> · <time dateTime={formattedDate}>{formattedDate}</time></p>

                <p className="comments-and-likes-count">
                    <Link className="comments-link" title="View Comments" to={`/articles/${props.article.article_id}#comments` }>
                        <i className="fa-regular fa-comment" aria-label="Comments" title="Likes" ></i> {props.article.comment_count} 
                    </Link>
                     <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i> {props.article.votes} </p>
            </section>
        </>
    )
};

// export component/s
export { ArticlePreview };