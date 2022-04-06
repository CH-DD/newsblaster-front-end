// React stuff
import { useState } from "react"; 

// Custom utils & components
import { patchArticleToAddLike, patchArticleToRemoveLike } from "../../utils/apiUtils";


const Likes = ({ likes, article_id }) => {

    // State: count 'likes' value since initial page render
    const [ likesChange, setLikesChange ] = useState(0);

    // Function: Add or remove likes. Limit to one like per page render.   
    const addOrRemoveLike = () => {

        // Add a like - if not liked already
        if (likesChange === 0) {
            setLikesChange(likesChange + 1); // optimistic rendering (temp. value)
            document.querySelector("#likes-button").classList.add("liked"); // styling class
            document.querySelector("#likes-button").title = "Unlike this article"; // change button title

            patchArticleToAddLike(article_id)    // update db 
            .catch((err) => {
                setLikesChange(likesChange - 1); // reset likes if error occurs
            });

        // Remove the like if already liked
        } else if (likesChange !== 0) {  
            setLikesChange(likesChange - 1); 
            document.querySelector("#likes-button").classList.remove("liked");
            document.querySelector("#likes-button").title = "Like this article"; 

            patchArticleToRemoveLike(article_id)   
            .catch((err) => {
                setLikesChange(likesChange + 1); // error handling
            });
        }
    };

    return (  
        <>
            <button 
                title="Like this article" 
                id="likes-button"
                onClick={() => addOrRemoveLike()}
            >
                <i className="fa-regular fa-thumbs-up" aria-label="Likes"></i>  { likes }
            </button>
        </>
    );
}
 
export { Likes };