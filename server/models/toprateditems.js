const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const topRatedSchema = new schema({

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
        type:String,
        required:true
    }

},{timestamps:true}
)

module.exports = mongoose.model('TopRated', topRatedSchema)