const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("users", userSchema);