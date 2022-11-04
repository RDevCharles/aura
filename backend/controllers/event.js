const Event = require("../models/event");

async function index(req, res, next) {
    let event = await Event.find({});
    res.json(event);
 
}

module.exports = {
    index
}