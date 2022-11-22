const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: { type: String },
    cover: { type: String },
    //coming from the user admin models
    //this is how a users participation in a game will be monitored
    host: { type: Schema.Types.ObjectId, ref:"UserAdmin"},
    gameLink: { type: String, required: true },
    //when a game will be removed from site
    brandLink: { type: String, required: true },
    linkClicks: { type: Number },
    views: { type:Number},
    description: { type: String, required: true },
    gameCategory: { type: String, required: true},
})

//need method for this model

module.exports = mongoose.model('Game', gameSchema);