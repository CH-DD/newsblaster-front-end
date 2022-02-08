// import react stuff
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api-utils.js";
import { Link } from 'react-router-dom';  // handles links

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
        <section className="sub-nav">Sort by: Latest  / Talking Points / Popular</section>

        <h1 className="articles-heading">Latest</h1>
        
        {
          // go through all articles in the array
          articles.map((article) => {

            // convert ISO8601 date to more readable format
            const date = article.created_at; 
            let formattedDate = "";

            function formatDate(date) {
              return new Date(date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
              });
            }
            formattedDate = formatDate(date);

            // return the article preview
            return (
              <article className="article-preview" key={article.article_id}>
                <h2><Link to={`/articles/${article.article_id}`}>
                  {article.title}</Link>
                  </h2>
                
                <section className="post-meta">
                  <p>Posted by {article.author} in <Link to={`/topics/${article.topic}`}>{article.topic}</Link></p>
                  <p><time datetime={formattedDate}>{formattedDate}</time></p>
                  <p>{article.comment_count} Comments</p>
                  <p>{article.votes} Likes</p>
                </section>
              </article>
            ) 
          })
          
        }
      </main>

    )
};

// export component/s
export { Articles };