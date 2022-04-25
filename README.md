# NewsBlaster - A news & discussion website built in React

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## About the App
NewsBlaster is an example of a news aggregation, rating and discussion website, created in early 2022 as a solo task on the [Northcoders](https://northcoders.com/) software development bootcamp. The idea was to pull together different front-end skills, technologies and best practices learnt in the first 8-9 weeks of the course.

The site features articles divided into topics. Each article has a 'likes' and 'comments' count, and can be 'liked' or 'unliked' by the user. Articles can be sorted by date, comment count, popularity (likes), and filtered by topic.

Users can add comments to an article, and delete their previous comments. They also have the ability to switch user accounts (a temporary feature to demonstrate posting & deleting comments as different users). 

The site's front end was built using the [React.js](https://reactjs.org/) framework.

YouTube preview: ----YOUTUBE LINK TO GO HERE----

Hosted website: ----HOSTED LINK TO GO HERE----

## Technology used

React/Node.js was used for the front end to create a single-page application (SPA), with various 'routes' set up to display relevant data. The [axios](https://www.npmjs.com/package/axios) package assisted in making API calls to server endpoints. 

The app's front end interacts with a self-hosted REST API to retrieve/modify articles and associated data such as users, likes and comments. This back end server was set up as an earlier bootcamp project.

Within the React project, React Router v6 was used to handle URL routes, along with built-in 'hooks' (functions) such as useEffect to make calls to the server, useState to update data, and useContext to handle the current logged in user. 

The project features a number of custom components and JavaScript-based functions, a 'loading' spinner, error handling, and 'optimistic rendering' to update an article's likes count instantly - before updating data on the server.

The user interface features a 'responsive' CSS grid-based layout, with web fonts imported from Google Fonts, and icons from Font Awesome.

## Planning
In the early stages of the project, wireframes were created to help guide the layout and component structure of the final product. There was some slight deviation as the project developed. 

----WIREFRAMES GO HERE----

## Run the App Locally

- First, download the project into a local folder. In your terminal, run:

  `git clone https://github.com/CH-DD/nc-news-front-end.git` (if using HTTPS)

  `git clone git@github.com:CH-DD/nc-news-front-end.git` (if using SSH)

- Then navigate into the new folder, and install dependencies:

  `cd nc-news-front-end`
  
  `npm install`

## Credits
- [React](https://reactjs.org/) - Front end framework
- [axios (npm package)](https://www.npmjs.com/package/axios) - to assist with HTTP requests
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node.js package manager