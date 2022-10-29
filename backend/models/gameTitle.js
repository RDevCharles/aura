const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: { type: String },
    cover: { type: String },
    host: { type: String },
})

module.exports = mongoose.model('Game', gameSchema);