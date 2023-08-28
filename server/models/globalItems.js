const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const globalSchema = new schema({

    statusItem:{
        type:String
    }
},{timestamps:true}
)

module.exports = mongoose.model('Global', globalSchema)