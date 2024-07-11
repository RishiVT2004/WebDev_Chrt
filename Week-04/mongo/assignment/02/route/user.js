const { Router } = require("express");
const router = Router();
const {User,Course} = require("../database");
const JWT_Secret_pass = require("../config").JWT_SECRET;
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })

    res.json({
        messgae : "User created successfully"
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const validUser = await User.find({
        username : username,
        password : password
    })

    // console.log({JWT_Secret_pass});
    // console.log(token)

    if(validUser){
        const token = jwt.sign({
            username
        }, JWT_Secret_pass);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message: "Invalid User"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username:username,
    } , {
        "$push" : {
            purchasedCourses : courseId
        }
    })

    res.json({
        messgae : "Purchase completed successfully!!!"
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username

    const validUser = await User.find({
        username: username
    });

    const courses = validUser[0].purchasedCourses;
    
    res.json({
        Courses : courses
    })
});

module.exports = router
