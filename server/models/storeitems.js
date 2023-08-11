const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const details = new schema({

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
    }
})

module.exports = mongoose.model('store', details)