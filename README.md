# NewsBlaster - A news & discussion website built in React

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## About
NewsBlaster is a news aggregation, rating and discussion website. Created in early 2022 as a solo project on the [Northcoders](https://northcoders.com/) software development bootcamp. The project pulls together front-end skills from the first 8 weeks of the course.

The site features articles divided into topics. Each article has a 'likes' and 'comments' count, and can be 'liked' or 'unliked' by the user. Articles can be sorted by date, comment count, popularity (likes), and filtered by topic.

Users can add comments to an article, and delete their previous comments. They also have the ability to switch user accounts (a temporary feature to demonstrate posting & deleting comments as different users). 

Built using React.js.

**Live website: [https://newsblaster.netlify.app](https://newsblaster.netlify.app)**

![newsblaster-screenshot-preview-small](https://user-images.githubusercontent.com/68435229/166720465-4ccc32a9-ffd3-4578-88ef-c7c68d54d3d9.jpg)


## Technology used

React.js was used to create a single-page application (SPA), with various 'routes' set up to display content on individual pages. The [axios](https://www.npmjs.com/package/axios) package assists in making API calls to the server to retrieve data. 

The app's front end interacts with a self-hosted REST API, to retrieve and modify data such as article content, site users, likes and comments from different server endpoints. This back end was set up in an earlier bootcamp project.

Within the React project, React Router v6 is used to handle URL routing, along with React's built-in 'hooks' (functions). Examples include 'useEffect' to make API calls, 'useState' to update data, and 'useContext' to handle the current logged in user. 

The project features numerous custom components and JavaScript-based functions, a 'loading' spinner, error handling, and 'optimistic rendering' to instantly update an article's likes count - before updating data on the server.

The user interface features a 'responsive' CSS grid-based layout, with web fonts from Google Fonts, and icons from Font Awesome.

## Planning
In the early stages of the project, wireframes were created as a general guide to layout and component structure. There was some slight deviation as the project developed. 

![2-1  Articles, Topics](https://user-images.githubusercontent.com/68435229/165746258-f63a93fa-8c24-4ecf-a474-db5cbc00afc7.jpg)
![2-2  Article](https://user-images.githubusercontent.com/68435229/165746267-5f4c8be7-adff-4758-9ebe-ffbb0afd0a11.jpg)


## To Run the App Locally

### Download it

- In your terminal, run:

  `git clone https://github.com/CH-DD/newsblaster-front-end.git` (if using HTTPS)

  `git clone git@github.com:CH-DD/newsblaster-front-end.git` (if using SSH)

- Then navigate into the new folder, and install dependencies:

  `cd newsblaster-front-end`
  
  `npm install`
  
### Run it

- The app can then be run locally. It should open automatically in your web browser at [localhost:3000](http://localhost:3000). 

`npm run start`


## Credits
- [React](https://reactjs.org/) - Front end development library
- [axios (npm package)](https://www.npmjs.com/package/axios) - to assist with HTTP requests
- [Google Fonts](https://fonts.google.com/) - Web fonts
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node.js package manager
