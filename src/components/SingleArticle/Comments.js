// Custom utils & components
import SingleComment from './SingleComment';

// Main content
const Comments = ({ article_id, currentArticle, comments, formatDateAndTime }) => {  
 
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
                />

                  // <div className={commentClassBasedOnAuthor(comment.author)}
                  //   key={comment.comment_id}>

                  //   <div className="meta">
                  //     {/* AVATAR - would like to replace default img with user.avatar_url from /api/users/:username (fetch functionality not set up yet)  */}
                  //     <img className="avatar" src={defaultAvatar} alt="User avatar" />

                  //     <div className="author-and-date">
                  //       <h5 className="comment-author">{comment.author}</h5>
                  //       <p className="date">{formatDateAndTime(comment.created_at)}</p>
                  //     </div>
                  //   </div>
                    
                  //   <p className="body">{comment.body}</p>
                  // </div>
                ) 
              })
            }
          </section>


          {/********************** LeaveComment section **********************/}
          <section className="leave-comment anchor"  id="leave-comment" >

            <h3>Leave a comment</h3>

            <form onSubmit="">

                  <textarea 
                      placeholder="Enter your comment..."
                      required
                      // update state value as text is input
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