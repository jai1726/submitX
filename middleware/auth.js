const jwt = require('jsonwebtoken');


const authenticateToken = (req, res, next) => {
console.log("1");
    const token = req.headers.authorization?.split(' ')[1]; // Extracting  token from Bearer header
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
        console.log("2");
      // Verifying token and decoding the payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log("3");
      // Attaching  user info and role to the request object
      req.user = {
        id: decoded.userId,
        username: decoded.username,
        role: decoded.role, // Extracting  role
      };
  console.log("4");
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid or expired token', error: error.message });
    }

}

module.exports = authenticateToken;