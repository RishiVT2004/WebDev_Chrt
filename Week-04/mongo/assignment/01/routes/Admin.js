const express = require("express")
const AdminMiddleware = require("../middlewares/Admin")
const {Admin,Course} = require("../database")
const router = express.Router();
const zod = require('zod');

// create a new ADMIN
router.post('/signup',async (req,res) => {
     // Implement admin signup logic
     const username = req.body.username;
     const password = req.body.password;

    const inputSchema  = zod.object({
        username : zod.string().min(5).max(20),
        password : zod.string().min(8)
    })
    
    const {success} = inputSchema.safeParse({username : username , password : password})
   // console.log({success});

    if(success){
        await Admin.create({
            username: username,
            password: password
        })
        res.json({
            message : "Admin Registered Successfully"
        })
    }else{
        res.json({message : "invalid input credentials"})
    }
});

//creates a NEW COURSE
router.post('/courses', AdminMiddleware, async (req, res) => { //Admin Middleware checks if there is the user info is correct -> 
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink 

    const NewCoures = await Course.create({
        title,
        description,
        price,
        imageLink
    })

     // when a data is given to MongoDB an random id is generated -> stored in _.id format

    res.json({message : 'New Course Created Successfully ' , courseId : NewCoures._id })
});

router.get('/courses', AdminMiddleware, async (req, res) => { //returns all current created courses
    // Implement fetching all courses logic
    const AllCourses = await Course.find({})
    res.json({
        CourseList : AllCourses
    })
});

module.exports = router;