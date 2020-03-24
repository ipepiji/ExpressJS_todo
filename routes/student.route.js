let express = require('express')
let student = express.Router()
let controller = require('../controllers/studentController')
let validation = require('../middlewares/validations/student.validation')
let db = require('../middlewares/db.connection')

student.post('/create', validation.create, db.connect, controller.create)
student.get('/', controller.get)
student.get('/:name', controller.getName)
student.get('/test/error', controller.getError)

module.exports = student