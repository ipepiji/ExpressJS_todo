require('dotenv').config({ path: __dirname + '/.env' })

let express = require('express')
let app = express()
let student = require('./routes/student.route')
let bodyParser = require('body-parser')
let database = require('./config/db.connection')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} => ${req.method} ${req.originalUrl}`)
    next()
})

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: "Success",
        message: "Health Check, OK!"
    })
})

app.get('/connection/db', async (req, res, next) => {
    let conn = await database.connect()

    if (conn === "Database connected")
        res.status(200).json({
            status: "Success",
            message: "Database Connection Check, OK!"
        })
    else
        res.status(500).json({
            status: "Error",
            message: "Database Connection Check, Fail!"
        })
})

database.connect().then(result => {
    console.log(result);

    app.use('/student', student)

    app.use(express.static('public'))

    app.use((req, res, next) => {
        res.status(404).json({
            status: "Error",
            message: "Method not found"
        })
    })

    app.use((err, req, res, next) => {
        console.log(err);
        res.status(500).json({
            status: "Error",
            message: "Internal Server Error"
        })
    })

    const HOST = process.env.HOST || "localhost",
        PORT = process.env.PORT || 3000

    app.listen(PORT, HOST, () => {
        console.info(`Server live on http://${HOST}:${PORT}`)
    })
})