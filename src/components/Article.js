// import react stuff
import { useState } from "react"; // may not need
import { getArticles } from "../utils/api-utils.js"; // may not need
import { useParams } from 'react-router-dom';  // to get article_id

const Article = () => {  
    // useParams: grab current article id parameter
    const { article_id } = useParams();

    // Fetch individual article data 
    const [articles, setArticles] = useState([]);

    console.log(articles)


    return (
      <main className = "article-page">
        <article>
            <h2> { article_id }An individual article</h2>  
            {/* need to get the title in here ^^  */}
            {/* {props.article.title} */}
        </article>
      </main>
    )
};

// export component/s
export { Article };