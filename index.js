//importing the package (express)
const express = require('express');
const connectDatabase = require('./database/database');
const dotenv = require('dotenv');

//creating an express application
const app = express();

//Express Json Config
app.use(express.json());

//dotenv configuration
dotenv.config();

//connecting to database
connectDatabase();

//Using the port defined in env
const PORT = process.env.PORT;

//Making a test endpoint
//Endpoints: POST, GET, PUT, DELETE

app.get('/test', (req, res) => {
    res.send("Test API is working");
})
// http://localhost:5500/test/

//configuring routes of user 
app.use('/api/user', require('./routes/userRoutes'))



//Starting the server
app.listen(PORT, () => {
    console.log(`server is now running on port ${PORT}!`);
})