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

const userAdminSchema = new Schema(
  {
        brandName: { type: String, unique: true, required: true },
        accountHolder: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    officeAddress: {
      street: String,
      aptNumber: String,
      zipCode: Number,
      state: String,
      city: String,
        },
    officeNumber: { type: String, required: true},
    underContract: { type: Boolean, default: true },

    //the about of spendably tokens a user has to paticipate in the game

        alerts: [AlertsModel],
    // user admin will have a list of users that play their game
    // need a static method for this to work
    //virtuals can be used to display info to dashboard
        customerInfo:{ type: Schema.Types.ObjectId, ref:"User"}
    },
  
  { timestamps: true }
);






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

module.exports = mongoose.model("UserAdmin", userAdminSchema);
