const cart = require('../models/cartModels')

const { default:mongoose } = require('mongoose')

const getcarts = async (req,res) => {

    const user_id = req.user._id 

    const carts = await cart.find({ user_id }).sort({ createdAt:-1 })

    res.status(200).json(carts)

}

const getcart = async (req,res) => {

    const { id } = req.params

    const carts = await cart.findById(id)

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!carts){
        res.status(404).json('empty list')
    }

    res.status(200).json(carts)

}

const createcart = async (req,res) => {

    const {title,prize,description,phone,image,quantity} = req.body

    const user_id = req.user._id

    try {
        const carts = await cart.create({title,prize,description,phone,image,quantity,user_id})
        res.status(200).json(carts)

    }catch (error) {

        res.status(403).json({ error:error.message })
        
    }
}

const deletecart = async (req,res) =>{

    const { id } = req.params

    const carts = await cart.findByIdAndDelete({_id:id})

    // if(!mongoose.Types.ObjectId.isValid({_id: id})){
    //     res.status(404).json('error')
    // }

    if(!carts){
        res.status(403).json('empty list')
    }

    res.status(200).json(carts)

}

const updatecart = async (req,res) => {

    const { id } = req.params

    const carts = await cart.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    // if(!mongoose.Types.ObjectId.isValid({_id: id})){
    //     res.status(404).json('error')
    // }

    if(!carts){
        res.status(404).json('empty list')
    }

    res.status(200).json(carts)

}

module.exports = {

    getcart,
    getcarts,
    createcart,
    updatecart,
    deletecart
}