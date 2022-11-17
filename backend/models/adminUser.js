const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

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
    officeNumber: { type: String, required: true },
    gameId: { type: Schema.Types.ObjectId, required: true },
    websiteLink: { type: String, required: true },
    monthlySiteVisit: { type: Number, default: 0 },

    customers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },

  { timestamps: true }
);

//must be pre save (kind of like middleware)
userAdminSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);

    user.password = hash;
    return next();
  });
});

module.exports = mongoose.model("UserAdmin", userAdminSchema);
