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

const cartRoutes = require('./routes/cart')

const categoryRoutes = require('./routes/categories')

const stripeRoutes = require('./routes/stripe')

const adminRoutes = require('./routes/admin')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/',(req,res,next) => {
    console.log(req.path, req.method)  
    next()
})

// app.use('/image', express.static('uploads/'))

app.use('/api/items', storeroutes)
app.use('/api/system', systemroutes)
app.use('/api/users', userroutes) 
app.use('/api/toprated', toprated)
app.use('/api/cart', cartRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/stripe', stripeRoutes)
app.use('/api/admin', adminRoutes)
// app.use('/upload', multerRoutes)

mongoose.connect(
    process.env.MONGOOSE
).then(
    app.listen(process.env.PORT, () => {
        console.log('App listening on port',process.env.PORT)
        console.log('DB uri is', process.env.MONGOOSE)
    })
) 