// 'Utility' function used to interact with API endpoints

// Use axios to handle http requests
import axios from "axios"; 

// Set base URL
const newsApi = axios.create({
    baseURL: "https://ncnewsbackend.herokuapp.com/api",
});


// Articles & Comments

    // return array of 'article' objects, sorted by a given parameter
    export const getArticles = (sort_by) => {
    return newsApi
        .get("/articles", {
            params: { limit: 100, sort_by}
        })
        .then(({ data }) => {
            return data.articles;  
        });
    };

    // return single article
    export const getArticleById = (article_id) => {
    return newsApi
        .get(`/articles/${article_id}`)
        .then(({ data }) => {
            return data.article;  
        });
    };

    // return single article's comments
    export const getArticleComments = (article_id) => {
    return newsApi
        .get(`/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments;  
        });
    };

    // 'like' a single article & update 'votes'
    export const patchArticleToAddLike = (article_id) => {
    return newsApi
        .patch(`/articles/${article_id}`, { "inc_votes": 1 }) // add a 'like'
        .then(({ data }) => {
            return data.article; 
        });
    };

    // 'unlike' a single article & update 'votes'
    export const patchArticleToRemoveLike = (article_id) => {
    return newsApi
        .patch(`/articles/${article_id}`, { "inc_votes": -1 }) // remove a 'like'
        .then(({ data }) => {
            return data.article;
        });
    };

    // post a comment on an article
    export const postComment = (article_id, commentBody, commentAuthor) => {
        return newsApi
            .post(`/articles/${article_id}/comments`, { "body" : commentBody, "username": commentAuthor }) 
            .then(({ data }) => {
                return data.comment; 
            });
        };


    // return array of 'topics' objects
    export const getTopics = () => {
    return newsApi
        .get("/topics")
        .then(({ data }) => {
            return data.topics;  
        });
    };

// Users

    // return single user data
    export const getUserData = (username) => {
        return newsApi
            .get(`/users/${username}`)
            .then(({ data }) => {
                return data.user;  
            });
    };
 