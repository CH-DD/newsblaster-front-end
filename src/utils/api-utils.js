// use axios to handle http requests
import axios from "axios"; 

const newsApi = axios.create({
    baseURL: "https://ncnewsbackend.herokuapp.com/api",
});

export const getArticles = () => {
    return newsApi
        .get("/articles")
        .then(({ data }) => {
            return data.articles;  // returns array of 'article' objects
        });
};
 