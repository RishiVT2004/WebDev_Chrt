const { Router } = require("express");
const router = Router();
const { User, Course } = require("../database");
const JWT_Secret_pass = require("../config").JWT_SECRET;
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const zod = require("zod");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const inputSchema = zod.object({
    username: zod.string().min(6).max(20),
    password: zod.string().min(8),
  });

  const { success } = inputSchema.safeParse({
    username: username,
    password: password,
  });

  if (success) {
    await User.create({
      username,
      password,
    });
    res.json({ message: "new User Added" });
  } else {
    res.json({ message: "invalid user Credentials " });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

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
                message: "Invalid User"
            })
        }
    }else{
        res.status(403).json({
            message : "invalid input credentials"
        })
    }
});


router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    messgae: "Purchase completed successfully!!!",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;

  const validUser = await User.find({
    username: username,
  });

  const courses = validUser[0].purchasedCourses;

  res.json({
    Courses: courses,
  });
});

module.exports = router;
