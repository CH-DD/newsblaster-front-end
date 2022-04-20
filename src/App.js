// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";  // handles routes, endpoints
import { useState } from "react";

// Custom utils & components
import { Header } from "./components/Header";
import { ArticlesList } from "./components/Articles/ArticlesList";
import { SingleArticle } from "./components/SingleArticle/SingleArticle";
import { UserPage } from "./components/UserPage";
import { ErrorPage} from "./components/ErrorPage";
import { CurrentUserContext } from "./contexts/CurrentUserContext"; // for current logged in user

// Styles
import "./css/styles.css";
import "./css/styles-basic-reset.css";

// Main app
function App() {

  // State: logged in user (context)
  const [currentUser, setCurrentUser] = useState("tickle122"); // default user

  return (
    // make current user values available globally  
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }} > 
      <BrowserRouter>
        <>
            <Header />
            
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/articles" element={<ArticlesList />} />
              <Route path="/articles/:article_id" element={<SingleArticle />} />
              <Route path="/user" element={<UserPage />} />

              {/* 'catch all' for page navigation errors */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
      </BrowserRouter>

    </CurrentUserContext.Provider>
  );
}

// export component/s
export default App;
