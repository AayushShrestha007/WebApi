const userControllers = require("../controllers/userControllers");

const router= require('express').Router();

//Creating user registration route
router.post("/create", userControllers.createUser)

//Creating user login route
router.post("/login", userControllers.login)

module.exports= router;