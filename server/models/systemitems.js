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
    }
})

module.exports = mongoose.model('systemitems', systemSchema)