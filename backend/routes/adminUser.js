var express = require('express');
var router = express.Router();
const adminUserCntrl = require("../controllers/adminUser");


/* GET users listing. */

//http://localhost:3001/get-user-data
router.get("/get-user-data", adminUserCntrl.getUserData);
router.get("/get-site-visits", adminUserCntrl.getSiteVisits);


//http://localhost:3001/signup
router.post("/signup", adminUserCntrl.create);
//http://localhost:3001/login
router.post("/login", adminUserCntrl.login);


module.exports = router;