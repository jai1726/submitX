const jwt = require('jsonwebtoken');


const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token required' });


    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
 
        if (err) return res.status(403).json({ message: 'Invalid token' ,err});
        req.userId = user.userId;
        console.log(req.userId);
        next();
    });

}

module.exports = authenticateToken;