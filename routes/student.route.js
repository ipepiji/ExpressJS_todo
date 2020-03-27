let express = require('express')
let student = express.Router()
let controller = require('../controllers/studentController')
let validation = require('../middlewares/validations/student.validation')

student.route('/')
    .get(controller.retrieveAll)
    .post(validation.body, controller.create)

student.route('/:name')
    .get(controller.retrieveByName)
    .put(validation.body, controller.update)
    .delete(controller.delete)

student.get('/test/error', controller.getError)

module.exports = student