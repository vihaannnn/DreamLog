const mongoose = require('mongoose');
const query = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    query: String
});

module.exports = mongoose.model("Query", query)