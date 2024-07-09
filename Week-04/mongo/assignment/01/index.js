const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/Admin")
const userRouter = require("./routes/User")

// Middleware for parsing request bodies

app.use(bodyParser.json())
app.use("/Admin",adminRouter)
app.use("/User",userRouter)

const port = 2004
app.listen(port,() => {
    console.log(`server running on port number ${port}`)
})
