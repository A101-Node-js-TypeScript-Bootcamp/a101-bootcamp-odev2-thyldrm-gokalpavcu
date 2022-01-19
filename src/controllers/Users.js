const {insert,loginUser} = require("../services/Users")
const httpStatus = require("http-status")
const {generateAccessToken, generateRefreshToken} = require("../scripts/utils/helper");

const login = (req, res) => {
    try{
        res.status(httpStatus.CREATED).send(req.body);
    }catch{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

const register = (req,res) => {
    let user = {
        tokens:{
                access_token : generateAccessToken(req.body),
                refresh_token : generateRefreshToken(req.body),
            }
    }
    res.send(Object.assign(req.body,user))

}
module.exports = {login,register}