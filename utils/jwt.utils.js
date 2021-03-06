// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'fd55s6ees8dfer9gsdfg2qqeriiil3yl5';

// Exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin,
        },
        JWT_SIGN_SECRET,
        {
           expiresIn: '1h' 
        })
    }
}