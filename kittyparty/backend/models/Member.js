const mongoose = require('mongoose');
var Schema = mongoose.Schema
var memberSchema = new Schema({
    name: String,
    mobileno: String,
    address: String,
    city: String,
    state: String,
    dob: Date
});
var memberModel = mongoose.model('kityparty', memberSchema);
module.exports = memberModel;

