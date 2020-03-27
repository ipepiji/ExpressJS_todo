let StudentSchema = require('../models/student.model')

let studentController = {

    create: (req, res, next) => {
        let model = new StudentSchema(req.body)
        model.save()
            .then((result) => {
                if (!result || result.length === 0)
                    next("Error : Saving student data into database")

                return res.status(201).json(result)
            })
            .catch((err) => {
                next(err)
            })
    },

    retrieveAll: (req, res) => {
        return res.status(200).json({
            status: "Success",
            message: "Student"
        })
    },

    retrieveByName: (req, res) => {
        return res.status(200).json({
            status: "Success",
            message: `Student's name, ${req.params.name}`
        })
    },

    getError: (req, res, next) => {
        try {
            const ERROR = ERRRORRRRR
            console.log("Stuck above ^^", ERROR);
        }
        catch (err) {
            next(err)
        }
    }

}

module.exports = studentController