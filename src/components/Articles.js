// React stuff
import { useEffect, useState } from "react";
import { getArticles } from "../utils/apiUtils.js";

// Custom utils & components
import { ArticlePreview } from "../components/ArticlePreview.js";
import { pageTitle} from "../utils/pageTitle"; 


const Articles = () => {  

  // Set page title
  pageTitle( "NewsBlaster...blasting words in your face 24/7");

    // - state allows props to be passed into child components.
    // - to sort articles, update sortBy state and params eg. getArticles(sortBy)
    // - display 'loading' message whilst retrieving data
    const [articles, setArticles] = useState([]);
    const [sortBy, setSortBy] = useState("created_at");
    const [isLoading, setIsLoading] = useState("true");
 
    // useEffect: get article data from API
    useEffect(() => {
      getArticles(sortBy).then((articlesFromApi) => {  
        setArticles(articlesFromApi);
        setIsLoading(false);
      });
    }, [sortBy]);

    // toggle 'sort by' button state.
    // - if 'isActive' is true, replace style class with inactive
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
      setActive(!isActive);
    };

    if (isLoading) return <p className="loading-message"><i className="fa-solid fa-spinner"></i>Loading</p>;
    return (
      <> 
        <section className="sub-nav">
          <p>
            <button          
              className={"active"}  // button 1
              onClick = {() => {
                  setSortBy("created_at");
                  ToggleClass("active");
            }}>
              Latest
            </button>

            <button           
              className={isActive ? "inactive" : "active"} // button 2 
              onClick = {() => {
                  setSortBy("comment_count");
                  ToggleClass("active");
            }}>
              Most Commented
            </button>

            <button 
              className={isActive ? "inactive" : "active"} // button 2 
              onClick = {() => {
                  setSortBy("votes");
                  ToggleClass("active");
            }}>
              Popular
            </button>
          </p>
        </section>

        <main className= "articles-page">

          {/* <h1 className="articles-heading">Latest...</h1> */}
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
export { Articles };