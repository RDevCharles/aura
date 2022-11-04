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

async function purchaseGame(req, res) {
  console.log("hello from cntrl")
  let user = await User.findOne({ username: req.body.username });
  //should send userid over params to avoud another "api call"
//   let gameInstance = await Game.findOne({ title: req.body.title });

//   //if the game is not in gameslist already the subtract tokens and add it to games list
//   //otherwise do nothing
//   user.purchasedGames
//     .findOneById(req.params.id)
//     .then(async function (game) {
//       if (game) {
//         return null;
//       } else {
//         const newGame = await Game.create(req.body);
//         user.gamesList.push(newGame);
//         res.send(user);
//         user.save();
//       }
//     })
//     .catch(function (err) {
//       return null;
//     });
}

const pinGame = async (req, res) => {};

module.exports = {
  index,
  create,
  purchaseGame,
};
