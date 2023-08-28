const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const systemSchema = new schema({

    adress:{
        type:String
    },
    idnum:{
        type:String
    },
    phonenum:{
        type:Number
    },
    order:{
        type:String
    },
    img:{
        type:String
    },
    title:{
        type:String
    },
    phoneOrder:{
        type:String
    }
})

module.exports = mongoose.model('systemitems', systemSchema)