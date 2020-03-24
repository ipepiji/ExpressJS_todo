let mongoose = require('mongoose')

let StudentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Student', StudentSchema)