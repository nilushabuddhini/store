const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const globalSchema = new schema({

    title:{
        type:String,
        required:true
    },
    prize:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    image:{
        type:String
    }
},{timestamps:true}
)

module.exports = mongoose.model('Global', globalSchema)