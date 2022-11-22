const Game = require("../models/gameTitle");

async function index(req, res) {
  try {
    let games = await Game.find({});

    res.json(games);
  } catch (err) {
    res.json(err.message);
  }
}

const create = (req, res) => {
  try {
    Game.create(req.body);
    res.send({ code: res.status });
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = {
  index,
  create,
};
