
const User = require('../models/userModel');
const userModel = require('../models/userModel');

//code for registration
const createUser = async (req, res) => {

    //1. Check incoming data
    console.log(req.body);

    //2. Destructure the incoming data
    const { firstName, lastName, email, password } = req.body;

    //3. Validate the data (if empty, stop the process & send res)
    if (!firstName || !lastName || !email || !password) {
        //res.send("please enter all the details")
        res.json({
            "success": false,
            "message": "Please enter all fields!"
        })

    }

    //4. Error handling (try/catch)
    try {
        //5. Check if the user is already registered
        const existingUser = await userModel.findOne({ email: email })
        //5.1 If user found-> send response 
        //5.1.1 stop the process
        if (existingUser) {
            return res.json({
                "status": "false",
                "message": "user already exists"
            })
        }

        //5.2 if user is new:
        //5.2.1 Hash the password
        //5.2.2 Save to the database
        const newUser = new userModel({
            //database fields: client's value
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })

        //save to database
        await newUser.save()

        //5.2.3 send successful response
        res.json({
            "Success": true,
            "message": "User created successfully"
        }

        )

    } catch (error) {
        console.log(error)
        res.json({
            "success": "false",
            "message": "Internal server error!"
        })
    }
}

//code for login


const login = async (req, res) => {

    //1. Check incoming data
    console.log(req.body);

    //2. Destructure the incoming data
    const { email, password } = req.body;

    //3. Validate the data (if empty, stop the process & send res)
    if (!email || !password) {
        res.json({
            "success": false,
            "message": "Please enter all fields!"
        })

    }

    //4. Error handling (try/catch)

    //5.1 If username and password don't match-> send response 
    try {
        //5. Check if username and password match or not
        const matchedUser = await userModel.findOne({ email: email, password: password })

        //5.1 If user with email and password found-> send response 
        //5.1.1 stop the process
        if (matchedUser) {
            return res.json({
                "status": "true",
                "message": "login sucessful"
            })
        }
        //5.1 If user with email and password not found-> send response
        //5.1.1 stop the process
        return res.json({
            "status": "false",
            "message": "username and password don't match"
        })

    } catch (error) {
        console.log(error)
        res.json({
            "success": "false",
            "message": "Internal server error!"
        })
    }
}


//Exporting the function 
module.exports = {
    createUser,
    login,
};
