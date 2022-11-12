const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const AlertsModel = new Schema(
  {
    message: { type: String, required: true },
    seen: { type: Boolean, default: false },
  },
  { timestamp: true }
);

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, required: true },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    name: { type: String, required: true },
    address: {
      street: String,
      aptNumber: String,
      zipCode: Number,
      state: String,
      city: String,
    },
    signed: { type: Boolean, default: true },
    interests: {
      fashion: { Boolean, default: false },
      health: { Boolean, default: false },
      education: { Boolean, default: false },
      entertainment: { Boolean, default: false },
      tech: { Boolean, default: false },
      home: { Boolean, default: false },
      food: { Boolean, default: false },
    },

    // the interest stream will hold dynamic data like a feed
    purchasedGames: [{ type: Schema.Types.ObjectId, ref: "Game" }],

    //the about of spendably tokens a user has to paticipate in the game
    tokens: { type: Number, default: 1000 },
    tokenReload: { type: Date, default: new Date() },
    alerts: [AlertsModel],
  },
  { timestamps: true }
);

userSchema.methods.burnTokens = function (cost, gameResId) {
  // this helper function helps to see if the game is already in the purchased games list

  function gameIdCheck(gameId) {
    return gameId == gameResId;
  }

  let result = this.purchasedGames.filter(gameIdCheck);

  //if the list already has the game id inside return null
  //posibly change that to return some sort of json object

  if (result) return null;

  //if the dont have enough for game do nothing
  //posibly change that to return some sort of json object
  if (cost > this.token) return null;
  this.tokens -= cost;
  return this.save();
};

//function to add tokens to user account after an ad was viewed
userSchema.methods.afterAdReUp = function (cost) {
  this.tokens += cost;
  return this.save();
};

userSchema.methods.saveGame = function (gameResId) {
  function gameIdCheck(gameId) {
    return gameId == gameResId;
  }

  let result = this.purchasedGames.filter(gameIdCheck);

  //if the list already has the game id inside return null
  //posibly change that to return some sort of json object

  if (result) return null;

  //add game to list
  this.purchasedGames.push(gameResId);
};

//must be pre save (kind of like middleware)
userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);

    user.password = hash;
    return next();
  });
});

module.exports = mongoose.model("User", userSchema);
