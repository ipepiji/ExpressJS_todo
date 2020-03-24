let lecturerController = {
    get: (req, res) => {
        res.status(200).json({
            status: "Success",
            message: "Lecturer"
        })
    },

    getName: (req, res) => {
        res.status(200).json({
            status: "Success",
            message: `Lecturer's name, ${req.params.name}`
        })
    }
}

module.exports = lecturerController