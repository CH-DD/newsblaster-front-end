// React stuff
import { useEffect, useState } from "react"; 
import { useContext } from 'react'; // to access current user context
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// Custom utils & components
import defaultAvatar from '../../images/user-avatar-placeholder.png'; 
import { getUserData, deleteComment } from "../../utils/apiUtils";



const SingleComment = ({ comment, comments, setComments, currentArticle, formatDateAndTime }) => {

    // State: logged in user
    const { currentUser } = useContext(CurrentUserContext);

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

    // Values: comment author's avatar URL
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

    // Delete button - conditional loading to ensure it appears only for current user's comments
    function showDeleteButton() {
        if(comment.author === currentUser) {
            return true;
        }
    }
    // Delete button function
    function handleDelete() {
        deleteComment(comment.comment_id); // delete from db
    } 
    
    

    return (  
        <div 
            className={commentClassBasedOnAuthor(comment.author)}
            id={ comment.comment_id }
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
         
            { showDeleteButton() && (
                <button className="cta" onClick={handleDelete}><i className="fa-solid fa-xmark"></i> Delete</button>
            )}
        </div>
    );
}
 
export default SingleComment;