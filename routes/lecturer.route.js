let express = require('express')
let lecturer = express.Router()
let lecturerController = require('../controllers/lecturerController')

lecturer.get('/', lecturerController.get)
lecturer.get('/:name', lecturerController.getName)

module.exports = lecturer