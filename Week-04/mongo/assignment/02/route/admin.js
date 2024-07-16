const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../database");
const JWT_Secret_pass = require("../config").JWT_SECRET;
const router = Router();
const jwt = require("jsonwebtoken");
const zod = require('zod')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const inputSchema = zod.object({
        username : zod.string().min(6).max(20),
        password : zod.string().min(7)
    })

    const {success} = inputSchema.safeParse({username : username , password : password})

    if(success){
         // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

        res.json({
            message: 'Admin created successfully'
        })
    }else{
        res.status(403).json({
            message : "invalid input credentials"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
  //  console.log(JWT_Secret_pass);
  
  const inputSchema = zod.object({
    username : zod.string().min(6).max(20),
    password : zod.string().min(7)
  })

    const {success} = inputSchema.safeParse({username : username , password : password})

    if(success){
        const user = await Admin.find({
            username:username,
            password:password
        })
        if (user) {
            const token = jwt.sign({
                username
            }, JWT_Secret_pass);
    
            res.json({
                token
            })
        } else {
            res.status(411).json({
                message: "Invalid Admin"
            })
        }
    }else{
        res.status(403).json({
            message : "invalid input credentials"
        })
    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod

    const courseSchema = zod.object({
        title : zod.string().min(10).max(50),
        description : zod.string().min(15),
        imageLink : zod.string().isURL(),
        price : zod.number().min(999).max(9999)
    })

    const {success} = courseSchema.safeParse({title : title , description : description , imageLink : imageLink , price : price})

    if(success){
        const newCourse = await Course.create({
            title,
            description,
            imageLink,
            price
        })
    
        res.json({
            message: 'Course created successfully', courseId: newCourse._id
        })
    }else{
        res.status(403).json({
            message : "invalid course cresentials"
        })
    }
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;