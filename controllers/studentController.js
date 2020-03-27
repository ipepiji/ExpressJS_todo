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

    retrieveAll: (req, res, next) => {
        StudentSchema.find()
            .then((result) => {
                if (!result || result.length === 0)
                    return res.status(404).json({
                        status: "Fail",
                        message: "Users not found"
                    })

                return res.status(200).json(result)
            })
            .catch((err) => {
                next(err)
            })
    },

    retrieveByName: (req, res, next) => {
        StudentSchema.findOne({
            name: req.params.name,
        })
            .then((result) => {
                if (!result || result.length === 0)
                    return res.status(404).json({
                        status: "Fail",
                        message: `User:${req.params.name} not found`
                    })

                return res.status(200).json(result)
            })
            .catch((err) => {
                next(err)
            })
    },

    update: (req, res, next) => {
        StudentSchema.findOneAndUpdate({
            name: req.params.name,
        }, req.body)
            .then((result) => {
                if (!result || result.length === 0)
                    return res.status(404).json({
                        status: "Fail",
                        message: `User:${req.params.name} not found`
                    })

                return res.status(200).json(result)
            })
            .catch((err) => {
                next(err)
            })
    },

    delete: (req, res, next) => {
        StudentSchema.findOneAndDelete({
            name: req.params.name,
        })
            .then((result) => {
                if (!result || result.length === 0)
                    return res.status(404).json({
                        status: "Fail",
                        message: `User:${req.params.name} not found`
                    })

                return res.status(200).json(result)
            })
            .catch((err) => {
                next(err)
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