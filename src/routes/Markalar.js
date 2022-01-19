const express = require("express")
const router = express.Router()
const {listMarka} = require("../controllers/Markalar")
const authenticate = require("../middlewares/authenticate");

router.route("/:markaName").get(authenticate,listMarka)



module.exports=router;