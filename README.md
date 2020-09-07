# Book-Recommendation-Website



**_✨ A MERN Stack APP **

<p>
<img src="https://img.shields.io/badge/Frontend-ReactJS-blue?logo=react">
<img src="https://img.shields.io/badge/Backend-NodeJS-green?logo=node.js">
<img src="https://img.shields.io/badge/DataBase-MongoDB-lightgreen?logo=mongoDB">
<img src="https://img.shields.io/badge/State--Manager-Redux-purple?logo=redux">
</p>





## Setting Up

### A. Clone and install packages

1. Fork this project from the top right of the screen to create a copy of the code.
2. Download your fork of the project locally on your machine or clone it using

   ```
    git clone git@github.com:<your-username>/Book-Recommendation-Website.git
   ```

3. Navigate to the folder and run `npm i` for installing all packages & dependencies for the server/backend via npm.
4. Navigate to the `client` and run `npm i` to install all dependencies & packages required for the frontend via yarn.

### B. Create API secrets for external services

1. This project uses external services and APIs which require a secret/API pass-key for operations.
  
   - [MongoDB](https://www.mongodb.com/cloud/atlas) : Either a cloud hosted cluster on Mongo Atlas or your local mongo URL.

### C. Edit the config file for serving secrets

1. On the root of your project , in the folder config
   Add the following content to the default.json 
   mongoURI=<MONGO_CLUSTER_SECRET> 

   jwtSecret=<24_BIT_RANDOM_STRING_FOR_ENCODING_JWT>
 


### D. Run the project locally

1. Start the express server (via nodemon) for the backend and client (it uses concurrently).
   ```
   npm run dev
   ```



