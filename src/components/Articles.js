// import react stuff
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api-utils.js";

const Articles = () => {  

    // get articles data from api
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi); 
      });
    }, []);

    return (
      <main>
        <h1>Articles</h1>
        
        { // the problem function...

          articles.map((article) => {
            return (
              <article key={article.article_id}>
                <h4>{article.title}</h4>
              </article>
            ) 
          })
          
        }
      </main>
    )
};

// export component/s
export { Articles };