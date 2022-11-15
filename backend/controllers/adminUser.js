const userAdmin = require("../models/adminUser");
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
    const user = await userAdmin.findOne({ email: req.body.email });

    //checking to see if a week had past. If so give user more tokens
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

//complete this function
const updateAddress = async (req, res) => {
  userAdmin
    .updateOne({ name: "Ram" }, { address: await req.body })
    .then((data) => {
      res.send({ code: res.status, data: data });
    });
};

//complete this function
async function getUserData(req, res) {
  let admin = await userAdmin.findById(req.params.id);
  let customers = await admin.customers;
  let customersArray = [];

  while (customers) {
    for (let customer in customers) {
      customersArray.push({
        age: customer.age,
        interests: customer.interests,
        state: customer.address.state,
          city: customer.address.city,
        
      });
    }
  }

  res.send(customersArray);
}

async function getSiteVisits(req, res) {

}

//filter and remove game

//marks alerts from the server as seen

// const markAlert = async (req, res) => {
//   let user = await User.findOne({});
//   user.updateOne({})

// }

module.exports = {
  updateAddress,
  create,
    login,
    getUserData,
    getSiteVisits
};
