const jwt = require("jsonwebtoken");
const JWT_SECRET  = require("../config").JWT_SECRET; // issue 

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization; // bearer token
  const words = token.split(" "); // ["Bearer","token"]
  const jwtToken = words[1]; // token
  //console.log({token,words,jwtToken,JWT_SECRET})

  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  //console.log(decodedValue);


  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = adminMiddleware;
