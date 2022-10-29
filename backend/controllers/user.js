const User = require("../models/user");
const Game = require("../models/gameTitle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    //create and return token to user at signup
    const token = createJWT(user);
    //have to await token
    res.json(await token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    //can be done the same way as in line 12. Line twelve we're just puttig it in object form
    res.json(await createJWT(user));
  } catch {
    res.status(404).json("Bad Credentials");
  }
}

async function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

const updateAddress = async (req, res) => {
  console.log(req);
  User.updateOne({ name: "Ram" }, { address: await req.body }).then((data) => {
    res.send({ code: res.status, data: data });
  });
};

const pinGame = async (req, res) => {
  let user = await User.findOne({ name: "Ram" });
  const newGame = await Game.create(req.body);
  user.gamesList.push(newGame);
  res.send(user);
  user.save();
};

const deleteGame = async (req, res) => {
  let user = await User.findOne({ name: "Ram" });
  user.deleteOne({ gamesList: "6357fd92644fab3340662fdf" }).then((data) => {
    res.send(data);
  });

  //filter and remove game
};

//marks alerts from the server as seen

// const markAlert = async (req, res) => {
//   let user = await User.findOne({});
//   user.updateOne({})

// }

module.exports = {
  create,
  pinGame,
  updateAddress,
  deleteGame,
  login,
};
