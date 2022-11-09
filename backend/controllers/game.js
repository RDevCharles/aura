const Game = require("../models/gameTitle");
const User = require("../models/user");

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

async function purchGame(req, res) {
  //console.log("hello from cntrl")
  let user = await User.findOne({ username: req.body.username });
  user.purchaseGame(req.body.cost, req.params.id);

}

const pinGame = async (req, res) => {};

module.exports = {
  index,
  create,
  purchGame,
};
