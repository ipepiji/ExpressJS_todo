require('dotenv').config({ path: __dirname + '/.env' })

let mongoose = require('mongoose')

let database = {

    connect: (req, res, next) => {
        if (process.env.DB_PASSWORD)
            mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })
        else
            mongoose.connect(`mongodb://${process.env.DB_USER}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })

        next()
    },

    close: (req, res, next) => {
        console.log("hoi");

        mongoose.close()
        next()
    }

}

module.exports = database