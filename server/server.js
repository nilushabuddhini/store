const express =  require('express')

const globalroutes = require('./routes/global')

const path = require('path')

const cors = require('cors')

const dotenv = require('dotenv').config()

const { default:mongoose } = require('mongoose')

const storeroutes =  require('./routes/storeroutes')

const systemroutes = require('./routes/system')

const userroutes = require('./routes/users')

const toprated = require('./routes/topRated')

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3000/login', 'http://localhost:3000/signup', 'http://localhost:3000/global', 'http://localhost:3000/order', 'http://localhost:3000/order/back/getorders'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH']
}))

app.use(express.json())

app.use('/',(req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/items', storeroutes)
app.use('/api/system', systemroutes)
app.use('/api/users', userroutes)
app.use('/api/toprated', toprated)

mongoose.connect(
    process.env.MONGOOSE
).then(
    app.listen(process.env.PORT, () => {
        console.log('App listening on port',process.env.PORT)
        console.log('DB uri is', process.env.MONGOOSE)
    })
)