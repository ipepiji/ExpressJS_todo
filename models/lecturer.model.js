let mongoose = require('mongoose')

let LecturerSchema = mongoose.Schema({
    name: String,
    age: Integer
})

module.exports = mongoose.model('Lecturer', LecturerSchema)