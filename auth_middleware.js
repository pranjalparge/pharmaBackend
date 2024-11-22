
const User = require('./models/user_model');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Assuming the token is in the format "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.uid = decoded.id; 
        next(); 
    });
};

module.exports = authenticateToken;
