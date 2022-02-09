// import react stuff
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/api-utils.js";
import { Link, NavLink } from 'react-router-dom';  // handles links

// import components
import { ArticlePreview } from "../components/ArticlePreview.js";


// articles component
const Articles = () => {  

    // get articles & topics data from api. 
    // state allows props to be passed into child components.
    const [articles, setArticles] = useState([]);
    // const [topics, setTopics] = useState([]);
 
    useEffect(() => {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi); 
      });
    }, []);

    // useEffect(() => {
    //   getTopics().then((topicsFromApi) => {
    //     setTopics(topicsFromApi); 
    //   });
    // }, []);

    return (
      <> 
          <section className="sub-nav">
          {/* {
            topics.map((topic) => {

              // topic preview
              return (
                <p>
                  {topic.slug}
                </p>
              ) 
            })
          } */}
          
          <p>  
            <NavLink exact to="/articles" activeClassName="active" className="active">Latest</NavLink> 
            <NavLink exact to="/articles?sort_by=comment_count" activeClassName="active">Comments</NavLink> 
            <NavLink exact to="/articles?sort_by=votes" activeClassName="active">Popular</NavLink> 
          </p>
        </section>

        <main>
        

          <h1 className="articles-heading">Latest</h1>
          
          {
            // go through all articles in the array
            articles.map((article) => {

              // article preview
              return (
                <article className="article-preview" key={article.article_id}>
                  <ArticlePreview article={article} />
                </article>
              ) 
            })
            
          }
        </main>
      </> 

    )
};

// export component/s
export { Articles };