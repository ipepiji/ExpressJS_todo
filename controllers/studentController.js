let StudentSchema = require('../models/student.model')
let db = require('../middlewares/db.connection')

let studentController = {

    create: (req, res) => {
        let model = new StudentSchema(req.body)
        model.save()
            .then((result) => {
                if (!result || result.length === 0)
                    throw new Error()
                
                db.close
                return res.status(201).json(result)
            })
            .catch((err) => {
                throw new Error(err)
            })
    },

    get: (req, res) => {
        res.status(200).json({
            status: "Success",
            message: "Student"
        })
    },

    getName: (req, res) => {
        res.status(200).json({
            status: "Success",
            message: `Student's name, ${req.params.name}`
        })
    },

    getError: (req, res) => {
        try {
            const ERROR = ERRRORRRRR
            console.log("Stuck above ^^", ERROR);
        }
        catch (err) {
            next()
        }
    }

}

module.exports = studentController