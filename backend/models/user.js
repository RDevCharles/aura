const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const AlertsModel = new Schema({
  message: { type: String, required: true },
  seen: { type: Boolean, default: false },
}, { timestamp: true });

const userSchema = new Schema({
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
  gamesList: [{ type: Schema.Types.ObjectId, ref: "Game" }],

  //the about of spendably tokens a user has to paticipate in the game
  tokens: { type: Number, default: 1000 },
  alerts:[AlertsModel]
});



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
