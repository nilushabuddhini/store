const { default:mongoose } = require('mongoose')

const schema = mongoose.Schema

const categorySchema = new schema({
    
    category:{
        type:String,
        required:true
    },
    bgImage:{
        type:String,
        required:true
    }
},{timestamps:true}
)

module.exports = mongoose.model('Categories', categorySchema)
