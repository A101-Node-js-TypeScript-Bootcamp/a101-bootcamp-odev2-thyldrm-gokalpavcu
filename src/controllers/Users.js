const httpStatus = require("http-status")
const {generateAccessToken, generateRefreshToken} = require("../scripts/utils/helper");

const register = (req, res) => {
    try{
        res.status(httpStatus.CREATED).send(req.body);
    }catch{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

const login = (req,res) => {
    let user = {
        tokens:{
                access_token : generateAccessToken(req.body),
                refresh_token : generateRefreshToken(req.body),
            }
    }
    res.send(Object.assign(req.body,user))

}
module.exports = {login,register}