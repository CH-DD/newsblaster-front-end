// import react stuff
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // handles routes, endpoints

// import components
import { Header } from "./components/Header";
import { ArticlesList } from "./components/Articles/ArticlesList";
import { Topics } from "./components/Topics";
import { SingleArticle } from "./components/SingleArticle/SingleArticle";
import { ErrorPage} from "./components/ErrorPage";

// import styles 
import "./css/styles.css";
import "./css/styles-basic-reset.css";

// main app
function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}

// export component/s
export default App;
