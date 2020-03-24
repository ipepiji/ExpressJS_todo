require('dotenv').config({ path: __dirname + '/.env' })

let express = require('express')
let app = express()
let student = require('./routes/student.route')
let lecturer = require('./routes/lecturer.route')
let bodyParser = require('body-parser')

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

app.use('/student', student)
app.use('/lecturer', lecturer)

app.use(express.static('public'))

app.use((req, res, next) => {
    res.status(404).json({
        status: "Error",
        message: "Method not found"
    })
})

app.use((err, req, res, next) => {
    const MSG = err.Error || "Internal server error"

    res.status(500).json({
        status: "Error",
        message: MSG
    })
})

const HOST = process.env.HOST || "localhost",
    PORT = process.env.PORT || 3000

app.listen(PORT, HOST, () => {
    console.info(`Server live on http://${HOST}:${PORT}`)
})