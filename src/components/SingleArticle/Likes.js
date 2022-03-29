import { patchArticleById } from "../../utils/apiUtils";

const Likes = ({ likesCount, article_id }) => {

    /* 
    - make patch request to DB - done
    - update state to add 1 - done
    - limit to max 1 like

    - refer to 'optimistic rendering' vid from  Wk9_Day4_Thu 3 Feb- Upto 46:00
    */
    const addLike = () => {
        patchArticleById(article_id)
            .then(updatedArticle => {
                // Update UI to have 1 more like than on page load. 

            })
    };



    return (  
        <>
            {/* likes button in progress */}
            <button onClick={() => addLike()}>
                <i className="fa-regular fa-thumbs-up" aria-label="Likes" title="Likes"></i>
            </button>
            <p>{ likesCount }</p>
        </>
        
    );
}
 
export { Likes };