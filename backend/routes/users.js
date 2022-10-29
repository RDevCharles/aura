var express = require('express');
var router = express.Router();
const userCntrl = require("../controllers/user");

/* GET users listing. */
//http://localhost:3001/signup
router.post("/signup", userCntrl.create);
//http://localhost:3001/login
router.post("/login", userCntrl.login);
//http://localhost:3001/my-games
router.get("/my-games", userCntrl.create);
//http://localhost:3001/my-games
router.get("/my-games", userCntrl.deleteGame);
//http://localhost:3001/games
router.post("/games", userCntrl.pinGame);
//http://localhost:3001/profile/update-address
router.put("/profile/update-address", userCntrl.updateAddress);

module.exports = router;