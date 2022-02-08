// import react stuff
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // handles routes, endpoints

// import components
import { Header } from "./components/Header.js";
import { Articles } from "./components/Articles.js";
import { Topics } from "./components/Topics.js";
import { Article } from "./components/Article.js";

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
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>

      </>
    </BrowserRouter>
  );
}

// export component/s
export default App;
