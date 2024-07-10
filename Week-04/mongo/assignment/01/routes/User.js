const { Router } = require("express");
const router = Router();
const { User, Course } = require("../database");
const UserMiddleware = require("../middlewares/User");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });
  res.json({ message: "new User Added" });
});

router.get("/courses", UserMiddleware, async (req, res) => {
  //open ended website no need to sign in
  // Implement listing all courses logic
  const AllCourses = await Course.find({});
  res.json({
    CourseList: AllCourses,
  });
});

/*important*/
router.post("/courses/:courseId", UserMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  // this course needs to be puched to purchasedCourse Array 
  await User.updateOne({
      username: username
  }, {
      "$push": {
          purchasedCourses: courseId
      }
  })
  res.json({
      message: "Purchase complete!"
  })
});


router.get("/purchasedCourses", UserMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username : req.headers.username
  })

  /* console.log(user.purchasedCourses) // returns array of ObjectID -> [new ObjectId('668e7f177a82c2a1b787827b')]*/
  // *courseId => _id(how it is stored in mongoose )
  const UserCourses = await Course.find({
    _id : {
        "$in" : user.purchasedCourses
    }
  })
  res.json({
    CoursePurchasd : UserCourses
  })
});

module.exports = router;
