import { Link } from 'react-router-dom';  // handles links
import { formatDate } from "../utils/formatDate"; // custom date formatting

const ArticlePreview = (props) => {  

    return (
        <>
            <h2><Link to={`/articles/${props.article.article_id}`} >
            {props.article.title}</Link>
            </h2>
            
            <section className="post-meta">
                
                <p className="author-topic-and-date">by {props.article.author} · <Link className="topic" to={`/topics/${props.article.topic}`}>{props.article.topic}</Link> · {formatDate(props.article.created_at)} </p>

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