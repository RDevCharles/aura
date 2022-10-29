const Game = require('../models/gameItem');

const addGame = (req,res) => {
    Game.create(req.body);
    res.send({ code: res.status })
}

module.exports = {
    addGame
}