let express = require('express')
let student = express.Router()
let controller = require('../controllers/studentController')
let validation = require('../middlewares/validations/student.validation')

student.route('/')
    .get(controller.retrieveAll)
    .post(validation.create, controller.create)

student.get('/:name', controller.retrieveByName)

student.get('/test/error', controller.getError)

module.exports = student