const httpStatus = require("http-status");
const JWT = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1] || null;
    if (token === null) {
        return res.status(httpStatus.UNAUTHORIZED).send({ error: "Giriş yapmalısınız" })
    }

    JWT.verify(token, "ASDASDASDASDASD", (err, user) => {
        if (err) return res.status(httpStatus.FORBIDDEN).send({ error: err });
        req.user = user._doc;
        next();
    })
}

module.exports = authenticateToken;