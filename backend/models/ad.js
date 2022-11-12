const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let adSchema = new Schema({
    videoLink: { type: String },
    adPrompt: { type: String },
    choices: { type: Int8Array },
    responses: { type: Int8Array }

});

module.exports = mongoose.model("Ad", adSchema);