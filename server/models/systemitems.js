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
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('systemitems', systemSchema)