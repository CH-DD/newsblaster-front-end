// Individual comments

// Custom utils & components
import defaultAvatar from '../../images/user-avatar-placeholder.png'; 

// Main content
const SingleComment = ({ comment, currentArticle, formatDateAndTime }) => {

    // Comments class name function. If author of comment is same as main article author, append 'by-author' to class name  */
    function commentClassBasedOnAuthor(commentAuthor) {
        const articleAuthor = currentArticle.author;
    
        if(commentAuthor !== articleAuthor) {
            return "comment"; // default class 
        } else {
            return "comment by-author";  
        }
    }

    return (  
        <div 
            className={commentClassBasedOnAuthor(comment.author)}
            key={comment.comment_id}
        >

            <div className="meta">
                {/* AVATAR - would like to replace default img with user.avatar_url from /api/users/:username (fetch functionality not set up yet)  */}
                <img className="avatar" src={defaultAvatar} alt="User avatar" />

                <div className="author-and-date">
                <h5 className="comment-author">{comment.author}</h5>
                <p className="date">{formatDateAndTime(comment.created_at)}</p>
                </div>
            </div>
            
            <p className="body">{comment.body}</p>

        </div>
    );
}
 
export default SingleComment;