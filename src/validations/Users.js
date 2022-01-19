const Joi = require("joi")

const loginAndRegisterValidation = Joi.object({
    password: Joi.string().required().min(8),
    email: Joi.string().required().email(),
})

module.exports={loginAndRegisterValidation} 