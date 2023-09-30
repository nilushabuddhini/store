const details = require('../models/storeitems')

const { default:mongoose } = require('mongoose')

const getitems = async (req,res) => {

    const user_id = req.user._id

    const items = await details.find({ user_id }).sort({ createdAt:-1 })

    res.status(200).json(items)

}


const createitem = async (req,res) => { 

    const {title,prize,description,phone,createId,image,itemsLeft,category} = req.body 

    const user_id = req.user._id

    try {
        const items = await details.create({title,prize,description,phone,image,createId,itemsLeft,category,user_id})
        res.status(200).json(items)

    }catch (error) {

        res.status(404).json({ error:error.message })
        
    }
}

module.exports = { createitem, getitems }