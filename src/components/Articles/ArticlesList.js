// React stuff
import { useEffect, useState } from "react";
import { getArticles } from "../../utils/apiUtils";

// Custom utils & components
import { ArticlePreview } from "./ArticlePreview";
import { pageTitle} from "../../utils/pageTitle"; 

const ArticlesList = () => {  

  // Set page title
  pageTitle( "NewsBlaster...blasting words in your face 24/7");

  // State: articles data 
  const [articles, setArticles] = useState([]);

  // State: loading message whilst retrieving data
  const [isLoading, setIsLoading] = useState(true);

  // State: article sorting. options include: created_at, comment_count, votes
  const [sortBy, setSortBy] = useState("created_at"); // default
    
  // useEffect: get article data from API
  useEffect(() => {
    getArticles(sortBy).then((articlesFromApi) => {  
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [sortBy]);

  // State: to toggle 'sort by' active button
  const [activeMenuItem, setActiveMenuItem] = useState("latest"); 

  // Conditional loading message
  if (isLoading) return <p className="loading-message"><i className="fa-solid fa-spinner"></i>Loading</p>;

  // Main content
  return (
    <> 
      <section className="sub-nav">
        <p>
          <button       
            className={activeMenuItem === 'latest' ? 'active nav-link' : 'nav-link'}  
            onClick = {() => {
                setSortBy("created_at");
                setActiveMenuItem('latest');
          }}>
            Latest
          </button>

          <button           
            className={activeMenuItem === 'most-comments' ? 'active nav-link' : 'nav-link'}
            onClick = {() => {
                setSortBy("comment_count");
                setActiveMenuItem("most-comments");
          }}>
            Most Comments
          </button>

          <button 
            className={activeMenuItem === 'popular' ? 'active nav-link' : 'nav-link'}
            onClick = {() => {
                setSortBy("votes");
                setActiveMenuItem("popular");
          }}>
            Popular
          </button>
        </p>
      </section>

      <main className= "articles-page">

        <section className="articles-wrapper">
  
          { // go through all articles in the array
            articles.map((article) => {

              // article preview
              return (
                <article className="article-preview" key={article.article_id}>
                  <ArticlePreview article={article} />
                </article>
              ) 
            })
            
          }
        </section>
      </main>
    </> 

  )
};

// export component/s
export { ArticlesList };