const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: { type: String },
    cover: { type: String },
    host: { type: String },
    link: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true},
    viewed:{type: Boolean, default: false},
})

module.exports = mongoose.model('Game', gameSchema);