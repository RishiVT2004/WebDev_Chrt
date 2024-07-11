/*
Same as the last assignment but you need to use jwts for authentication. We have introduced the 
signgin endpoints for both users and admins. For this one, in every authenticated requests, you need to send the *jwt in headers* 
(Authorization : "Bearer "). You need to use mongodb to store all the data persistently.

Routes
ADMIN : 

    POST /admin/signup Description: Creates a new admin account. 
    Input Body: { username: 'admin', password: 'pass' } Output: { message: 'Admin created successfully' }
    
    POST /admin/signin Description: Logs in an admin account. 
    Input Body: { username: 'admin', password: 'pass' } Output: { token: 'your-token' }
    
    POST /admin/courses Description: Creates a new course. 
    Input: Headers: { 'Authorization': 'Bearer ' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' } 
    Output: { message: 'Course created successfully', courseId: "new course id" }
    
    GET /admin/courses Description: Returns all the courses. 
    Input: Headers: { 'Authorization': 'Bearer ' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

    User routes

    POST /users/signup Description: Creates a new user account. 
    Input: { username: 'user', password: 'pass' } Output: { message: 'User created successfully' }
    
    POST /users/signin Description: Logs in a user account. 
    Input: { username: 'user', password: 'pass' } Output: { token: 'your-token' }
    
    GET /users/courses Description: Lists all the courses. 
    Input: Headers: { 'Authorization': 'Bearer ' } 
    Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
    
    POST /users/courses/:courseId Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased. 
    Input: Headers: { 'Authorization': 'Bearer ' } Output: { message: 'Course purchased successfully' }
   
    GET /users/purchasedCourses Description: Lists all the courses purchased by the user.
     Input: Headers: { 'Authorization': 'Bearer ' } 
     Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

*/
//*jwt type -> bearer + jwt 


const mongoose = require ('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin_rishi:rishi2004@cluster0.wamdssn.mongodb.net/CourseAp_JWT");

// Define schemas

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}