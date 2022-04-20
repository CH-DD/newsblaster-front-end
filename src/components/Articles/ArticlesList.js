// React stuff
import { useEffect, useState } from "react";

// Custom utils & components
import { getArticles, getTopics } from "../../utils/apiUtils";
import { ArticlePreview } from "./ArticlePreview";
import { pageTitle} from "../../utils/pageTitle"; 

const ArticlesList = () => {  

  // Set page title
  pageTitle( "NewsBlaster...blasting words in your face 24/7");
  
  // State: loading message whilst retrieving data
  const [isLoading, setIsLoading] = useState(true);

  // State: article & topics data 
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  // State: article sorting & topics. 
  // sorting options include: created_at, comment_count, votes
  const [sortBy, setSortBy] = useState("created_at"); // default
  const [topic, setTopic] = useState(""); 
    
  // useEffect: get article & topics data from API
  useEffect(() => {
    getArticles(sortBy, topic).then((articlesFromApi) => {  
      setArticles(articlesFromApi);
    });
  }, [sortBy, topic]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
      setIsLoading(false);
    });
  }, []);

  // State: to toggle 'sort by' active button
  const [activeMenuItem, setActiveMenuItem] = useState("latest"); 

  // Function: Topic selection. Use option 'value' as topic.
  function handleTopicChange({ target: { value } }) {
    setTopic(value);
  }

   // Function: Topic selection from link in article preview meta.
   function handleTopicChangeFromMeta(topic) {
    // change topic in dropdown select menu
    let elem = document.getElementById("topics");
    elem.value = topic; 

    // set topic for articles
    setTopic(topic);

    console.log(topic, elem);

  }

  // Conditional loading message
  if (isLoading) return <p className="loading-message"><i className="fa-solid fa-spinner"></i>Loading</p>;

  // Main content
  return (
    <> 
      <section className="sub-nav">

        <div className="container">

          {/* Sorting buttons */}
          <div className="sort-by">
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
          </div>

          {/* Topic selector */}
          <div className="topics">

            <select onChange={handleTopicChange} id="topics">
              
              <option value="">All Topics</option>

              { // list topics from db as drop down options
              topics.map((topic) => {
                return (
                  <option key={topic.slug} value={topic.slug} name={topic.slug} >{ topic.slug }</option>
                )
              })
            }
            </select>
          </div>

        </div>

      </section>

      <main className= "articles-page">

        <section className="articles-wrapper">
  
          { // go through all articles in the array
            articles.map((article) => {

              // article preview
              return (
                <article className="article-preview" key={article.article_id}>

                  {/* TESTING THIS BUTTON */}
                  <p><button onClick={() => {handleTopicChangeFromMeta("coding")}} >Click</button></p>


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