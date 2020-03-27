require('dotenv').config({ path: __dirname + '/.env' })

let mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)

let config = {

    local: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
    server: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`

}

module.exports.connect = async function(req, res, next) {
    let MODE
    process.env.DB_PASSWORD ? MODE = config.server : MODE = config.local
    try {
        await mongoose.connect(MODE)
        return "Database connected"
    }
    catch (err) {
        return "Database failed to connect";
    }
}