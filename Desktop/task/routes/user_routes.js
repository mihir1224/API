const router = require("express").Router();
const userController = require("../controllers/user_controller");

router.post("/", userController.createUserData);

module.exports = router;
