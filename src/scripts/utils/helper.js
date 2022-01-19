const JWT = require("jsonwebtoken")


const generateAccessToken = (user) => {
    return JWT.sign(user, "ASDASDASDASDASD", { expiresIn: "1w" })
}

const generateRefreshToken = (user) => {
    return JWT.sign(user, "ASDASDASDASDASD")
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}