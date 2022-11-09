const express = require("express");
const router = express.Router();
const gameCntrl = require("../controllers/game");

//http://localhost:3001/games
router.get('/', gameCntrl.index);
//http://localhost:3001/games/start/:id
router.post("/start/:id", gameCntrl.purchGame)

router.post('/', gameCntrl.create);

module.exports = router;

