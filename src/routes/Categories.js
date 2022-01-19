const express = require("express")
const router = express.Router()
const {listCategories,listCategory} = require("../controllers/Categories")
const authenticate = require("../middlewares/authenticate");

router.route("/").get(authenticate,listCategories)
router.route("/:id").get(authenticate,listCategory)



module.exports=router;