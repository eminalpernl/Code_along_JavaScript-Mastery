import express from "express";
import bodyParser from "body-parser"; //This allow us to take in POST request bodies.
import usersRouts from "./routes/users.js" // Make sure to add " .js " extension to the end of the path.

const app = express();
const PORT = 5000;

// body-parser middleware initialize 
app.use(bodyParser.json());
//NOT; bodyParser.json() say that we use json data in our whole application
// NOT: .json() is a common format for sending and requesting data to a REST API.
// In json, each property and value must be wrapped with double quotation.

//  Create Route

// app.get('/',(req,res)=>{
//     // console.log(req.url);
//     // console.log(req.params);
//     console.log(`Hello from Homepage. This is url: ${req.url} and This is params${req.params} `);
//     res.send(`Hello from Homepage. This is url: ${req.url} and This is params${req.params} `);

// });

 // NOT: Browser can only make GET request. Visiting a website means that we make a GET request
 // from this website.


 //Calling Routes from different js file

 app.use('/', usersRouts)

// making our application listen for incoming request.
app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
})