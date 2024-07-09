const { Router } = require("express");
const router = Router();
const UserMiddleware = require("../middlewares/User");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', UserMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', UserMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router