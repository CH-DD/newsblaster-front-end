// React stuff
import { useEffect, useState } from "react"; 

// Custom utils & components
import defaultAvatar from '../../images/user-avatar-placeholder.png'; 
import { getUserData } from "../../utils/apiUtils";


const SingleComment = ({ comment, currentArticle, formatDateAndTime }) => {

    // Value: current comment author's username (used in useEffect)
    const userName = comment.author;

    // State: to store comment author's data (used in useEffect)
    const [user, setUser] = useState([]);

    // useEffect: get comment author's data from API
    useEffect(() => {
        getUserData(userName).then((fetchedData) => {  
        setUser(fetchedData);
        });
    }, [userName]); 

    // Values: comment author's avatar URL, full name
    const avatarUrl = user.avatar_url;

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

                {/* User Avatar: use author's image URL if  image is returned successfully. Otherwise return a defaultAvatar placeholder (using JS 'onError')  */}
                <img 
                    className="avatar"
                    alt={userName + "'s avatar" }  
                    src={ avatarUrl }
                    onError={({ currentTarget }) => {
                        currentTarget.onError = null; // prevents looping
                        currentTarget.src = defaultAvatar ;
                    }}
                />
                
                <div className="author-and-date">
                <h5 className="comment-author">{ userName }</h5>
                <p className="date">{formatDateAndTime(comment.created_at)}</p>
                </div>
            </div>
            
            <p className="body">{comment.body}</p>

        </div>
    );
}
 
export default SingleComment;