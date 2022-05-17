//Define Routes
//Create a Controller
//Create Objects
//Retrieve Objects
//Retrieve a Single Object
//Update an Object
//Delete an Object
//Delete all Objects
//Test the API

// Methods      URLS                Actions
// GET          api/tutorials       get all tutorials
// GET          api/tutorials/:id   get tutorial by id
// POST         api/tutorials/      add new tutorials
// PUT          api/tutorials/:id   update tutorial by id
// DELETE       api/tutorials/:id   remove tutorial by id
// DELETE       api/tutorials       deletes all tutorials

// test the API using Postman

//Filenames
// config/db.config.js
// controllers/tutorial.controller.js
// models/db.js
// models/tutorial.model.js
// routes/tutorial.routes.js
// use npm to install mysql
// use npm to install cors

var express = require('express');
var cors = require('cors');
var app = express();

//CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security
//applied to an API
var corsOptions = {
    origin:"http://localhost:8081"
};

console.log("project is running")