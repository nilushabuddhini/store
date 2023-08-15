const details = require('../models/storeitems')

const { default:mongoose } = require('mongoose')

const getitems = async (req,res) => {

    const items = await details.find({})

    res.status(200).json(items)

}

const getitem = async (req,res) => {

    const { id } = req.params

    const items = await details.findById(id)

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}

const createitem = async (req,res) => {

    const {title,prize,description,phone,image} = req.body

    try {

        const items = await details.create({title,prize,description,phone,image})
        res.status(200).json(items)

    }catch (error) {

        res.status(404).json({ error:error.message })
        
    }
}

const deleteone = async (req,res) =>{

    const { id } = req.params

    const items = await details.findByIdAndDelete({_id:id})

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}

const updateitem = async (req,res) => {

    const { id } = req.params

    const items = await details.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!mongoose.Types.ObjectId.isValid({_id: id})){
        res.status(404).json('error')
    }

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}

module.exports = {

    getitems,
    getitem,
    createitem,
    deleteone,
    updateitem

}