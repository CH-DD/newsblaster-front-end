// use axios to handle http requests
import axios from "axios"; 

const newsApi = axios.create({
    baseURL: "https://ncnewsbackend.herokuapp.com/api",
});

export const getArticles = (sort_by) => {
    return newsApi
        .get("/articles", {
            params: { limit: 100, sort_by}
        })
        .then(({ data }) => {
            return data.articles;  // returns array of 'article' objects
        });
};



// this bit doesn't work
export const getSingleArticleById = (article_id) => {

    return newsApi
        .get(`/articles/${article_id}`)
        .then(({ data }) => {
            return data.article;  // returns single article
        });
        
};

 


export const getTopics = () => {
    return newsApi
        .get("/topics")
        .then(({ data }) => {
            return data.topics;  // returns array of 'topics' objects
        });
};
 