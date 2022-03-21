// import react stuff
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // handles routes, endpoints

// import components
import { Header } from "./components/Header";
import { Articles } from "./components/Articles";
import { Topics } from "./components/Topics";
import { SingleArticle } from "./components/SingleArticle";
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
          <Route path="/" element={<Articles />} />
          <Route path="/articles" element={<Articles />} />
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
