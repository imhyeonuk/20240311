const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkToken = require("../middlewares/checkToken");
const {getPost, addComment, getPostadd, addPost} = require("../controllers/postController")
router.use(cookieParser());

//post/add
router.route("/add")
.get(getPostadd)
.post(addPost)

//post/id값
router.route("/:id")
.get(getPost)
.post(checkToken, addComment)

module.exports = router;