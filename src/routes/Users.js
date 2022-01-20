const express = require("express")
const router = express.Router()
const validate = require("../middlewares/validate")
const schemas = require("../validations/Users")
const {login,register} = require("../controllers/Users")

router.route("/register").post(validate(schemas.loginAndRegisterValidation),register)
router.route("/login").post(validate(schemas.loginAndRegisterValidation),login)




module.exports=router;