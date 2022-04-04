// React stuff
import { useState } from "react";
import { useContext } from 'react'; // to access current user context

// Custom utils & components
import { postComment } from "../../utils/apiUtils";
import SingleComment from './SingleComment';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// Main content
const Comments = ({ article_id, currentArticle, comments, formatDateAndTime, handleFormSubmit, setCommentBody, commentAuthor }) => {  

  // State: logged in user
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

 


 
  // Main content
  return (

      <>
        {/********************** Comments section **********************/}
        <section className="comments anchor" id="comments">

          <h3>
            <i className="fa-regular fa-comment" aria-label="Comments" title="Comments" ></i> Comments 
            <span className="count"> ({currentArticle.comment_count})</span> 
          </h3>
          <a className="leave-comment" href="#leave-comment">Leave a Comment<i className="fa-solid fa-pen-to-square"></i></a>
          
          { // go through all comments in the array
          comments.map((comment) => {       
              
            return (
              <SingleComment
                comment={ comment }
                currentArticle={ currentArticle } 
                formatDateAndTime = { formatDateAndTime }
                key={ comment.comment_id }
              />
            ) 
          })
          }
        </section>


        {/********************** LeaveComment section **********************/}
        <section className="leave-comment anchor"  id="leave-comment" >

          <h3>Leave a comment</h3>

          <form onSubmit={ handleFormSubmit }>
                <textarea 
                    placeholder="Enter your comment..."
                    required
                    onChange = {(event) => setCommentBody(event.target.value)}
                    className = "comment-body"
                ></textarea>
                <p className="comment-guidelines">Please keep all discussion polite and respectful.</p>
                <button className="cta"> 
                  <i className="fa-solid fa-check"></i> Post Comment
                </button> 
            </form>

        </section>
      </>
  )
};

// export component/s
export { Comments };