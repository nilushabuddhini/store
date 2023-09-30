const myItem = require('../models/myItems')

const { default:mongoose } = require('mongoose')

const getmyItems = async (req,res) => {

    const user_id = req.user._id 

    const myItems = await myItem.find({ user_id }).sort({ createdAt:-1 })

    res.status(200).json(myItems)

}

const getmyItem = async (req,res) => {

    const { id } = req.params

    const myItems = await myItem.findById(id)

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!myItems){
        res.status(404).json('empty list')
    }

    res.status(200).json(myItems)

}

const createmyItem = async (req,res) => {

    const {title,prize,description,phone,image,quantity} = req.body

    const user_id = req.user._id

    try {
        const myItems = await myItem.create({title,prize,description,phone,image,quantity,user_id})
        res.status(200).json(myItems)

    }catch (error) {

        res.status(403).json({ error:error.message })
        
    }
}

const deletemyItem = async (req,res) =>{

    const { id } = req.params

    const myItems = await myItem.findByIdAndDelete({_id:id})

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!myItems){
        res.status(404).json('empty list')
    }

    res.status(200).json(myItems)

}

const updatemyItem = async (req,res) => {

    const { id } = req.params

    const myItems = await myItem.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!myItems){
        res.status(404).json('empty list')
    }

    res.status(200).json(myItems)

}

module.exports = {

    getmyItem,
    getmyItems,
    createmyItem,
    updatemyItem,
    deletemyItem
}