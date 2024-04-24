const mongoose = require('mongoose');
const dotenv= require('dotenv');

//dotenv configuration
dotenv.config();

//External file 
//Function to start connection
//Make a unique function name
//Export

const connectDatabase = () => {
    mongoose.connect(process.env.MOGODB_CLOUD).then(() => {
        console.log("database connected!")
    });
}

//Exporting the function 
module.exports= connectDatabase;