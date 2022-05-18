// Define Routes
// Create a Controller
// Create Objects
// Retrieve Objects
// Retrieve a Single Object
// Update an Object
// Delete an Object
// Delete all Objects
// Test the API

// Methods      URLS                Actions
// GET          api/tutorials       get all tutorials
// GET          api/tutorials/:id   get tutorial by id
// POST         api/tutorials/      add new tutorials
// PUT          api/tutorials/:id   update tutorial by id
// DELETE       api/tutorials/:id   remove tutorial by id
// DELETE       api/tutorials       deletes all tutorials

// test the API using Postman

// Filenames
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

// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security
// applied to an API
var corsOptions = {
    origin:"http:// localhost:8081"
};

console.log("project is running")

app.use(cors(corsOptions));

// app object is instantiated  on creation of the express server
// use is a method to configure the middleware used by the routes

// parse requests of content type application/json
app.use(express.json());

// parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// json() & urlencoded()
// .json() & .urlencoded() are both express middleware functions that parse data in outgoing requests
// What is middleware? 
// Function or piece of code that is called(run) between when a server gets a request from a client  
// and when it sends a response to the client. 
// examples
// 1. console.log('server is listening on port ${port})
// 2. functions that can manipulate incoming or outgoing data (.json() and urlencoded())
// they parse outgoing requests
// they are needed in POST and PUT requests
// they are not needed in GET and DELETE requests
// .json()
// Express.json() expects requests data to be sent in JSON format, resembles a simple JS Object
// {"Name": "Lwazi", "LastName": "Surname"}
// JSON stands for JavaScript Object Notation
// .urlencoded()
// Express.urlencoded() expects request data to be sent encoded in the URL, usually in strings or array
// .../Name=Pikcachu&Type=&Number+InStable=12
// you can call them using
// express.json()
// express.urlencoded()
// but if you want them to be used overtime a request is made on the server (which is a typical use case).
// You can also use app.use:
// app.use(express.json())
// app.use(express.urlencoded())

// simple route

app.get('/',(req, res) => {
    res.json({message: 'Welcome to the World of Node JS'})
});
require("./app/routes/tutorial.routes");

// set port, listen for requests

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http:// localhost:${PORT}`)
});

// Create Database NodeJSAPI
// Create MySQL table `tutorials`
// Create Table if not exists `tutorials` (
//      id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//      title VARCHAR(255) NOT NULL,
//      description VARCHAR(255),
//      published BOOLEAN DEFAULT false
// )

// Configure and connect our application to MySQL database