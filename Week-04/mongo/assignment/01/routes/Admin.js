const express = require("express")
const AdminMiddleware = require("../middlewares/Admin")
const {Admin,Courses} = require("../database")
const router = express.Router();

router.post('/signup',async (req,res) => {
     // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        messgae : "Admin Registered Successfully"
    })
 
});

router.post('/courses', AdminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', AdminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;