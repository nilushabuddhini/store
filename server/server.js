const express =  require('express')

const dotenv = require('dotenv').config()

const { default:mongoose } = require('mongoose')

const storeroutes =  require('./routes/storeroutes')

const app = express()

app.use(express.json())

app.use('/',(req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/items', storeroutes)

mongoose.connect(
    process.env.MONGOOSE
).then(
    app.listen(process.env.PORT, () => {
        console.log('App listening on port',process.env.PORT)
        console.log('DB uri is', process.env.MONGOOSE)
    })
)

