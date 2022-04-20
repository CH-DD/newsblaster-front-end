// React stuff
import { Link } from 'react-router-dom';

// Custom utils & components
import { formatDate } from "../../utils/formatDate"; 

const ArticlePreview = (props) => {  

    return (
        <>

            <h2><Link to={`/articles/${props.article.article_id}`} >
            {props.article.title}</Link>
            </h2>
            
            <section className="post-meta">
                
                <p className="author-topic-and-date">by {props.article.author} · <a className="topic" href="#" onClick={() => {props.handleTopicChangeFromMeta(props.article.topic)}} >{props.article.topic}</a> · {formatDate(props.article.created_at)} </p>

                <p className="comments-and-likes-count">
                    <a className="comments-link" title="View Comments" href={`/articles/${props.article.article_id}#comments` }>
                        <i className="fa-regular fa-comment" aria-label="Comments" title="Likes" ></i> {props.article.comment_count} 
                    </a>
                     <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i> {props.article.votes} </p>
            </section>
        </>
    )
};

// export component/s
export { ArticlePreview };