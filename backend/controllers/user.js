const User = require("../models/user");
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
    
    //checking to see if a week had past. If so give user more tokens
    let current = new Date().getTime()
    let past = user.tokenReload.getTime()
    if (current - past === 604800000) {
      user.tokenReload = new Date();
      user.tokens = user.tokens + 50;
    }


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



const deleteGame = async (req, res) => {
  let user = await User.findOne({ name: "Ram" });
  user.deleteOne({ gamesList: "6357fd92644fab3340662fdf" }).then((data) => {
    res.send(data);
  });

  //filter and remove game
};


module.exports = {
  create,

  updateAddress,
  deleteGame,
  login,
 
};
