// 'Utility' function used to interact with API endpoints

// Use axios to handle http requests
import axios from "axios"; 

// Set base URL
const newsApi = axios.create({
    baseURL: "https://ncnewsbackend.herokuapp.com/api",
});

// Articles & Comments
export const getArticles = (sort_by) => {
    return newsApi
        .get("/articles", {
            params: { limit: 100, sort_by}
        })
        .then(({ data }) => {
            return data.articles;  // returns array of 'article' objects
        });
};

export const getArticleById = (article_id) => {
    return newsApi
        .get(`/articles/${article_id}`)
        .then(({ data }) => {
            return data.article;  // returns single article
        });
};

export const getArticleComments = (article_id) => {
    return newsApi
        .get(`/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments;  // returns comments for the article
        });
};

export const getTopics = () => {
    return newsApi
        .get("/topics")
        .then(({ data }) => {
            return data.topics;  // returns array of 'topics' objects
        });
};

// Users
export const getUser = (username) => {
    return newsApi
        .get(`/users/${username}`)
        .then(({ data }) => {
            return data.user;  // returns single user data
        });
};
 