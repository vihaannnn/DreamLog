const mongoose = require('mongoose');
const user = new mongoose.Schema({
    email: String,
    username: String,
    firstname: String,
    lastname: String,
    password: String
});

module.exports = mongoose.model("User", user)