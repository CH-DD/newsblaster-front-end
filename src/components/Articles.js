// import react stuff
import { useEffect, useState } from "react";
import { getArticles, getArticlesSortedByComments } from "../utils/api-utils.js";
import { Link, NavLink } from 'react-router-dom';  // handles links

// import components
import { ArticlePreview } from "../components/ArticlePreview.js";


// articles component
const Articles = () => {  

    // get articles & topics data from api. 
    // state allows props to be passed into child components.
    const [articles, setArticles] = useState([]);
 
    useEffect(() => {
      getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi); 
      });
    }, []);


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
          
        

          {/* /articles?sort_by=comment_count
          /articles?sort_by=votes */}


          <p>
            {/* <span className="label">Sort by</span> */}
            <NavLink to="/articles" activeclassname="active" className="active">Latest</NavLink> 
            <NavLink to="/tbc1" activeclassname="active">Most Commented</NavLink> 
            <NavLink to="/tbc2" activeclassname="active">Popular</NavLink> 
          </p>
        </section>

        <main>

          {/* <h1 className="articles-heading">Latest...</h1> */}
          <section className="articles-wrapper">
          
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
          </section>
        </main>
      </> 

    )
};

// export component/s
export { Articles };