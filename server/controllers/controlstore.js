const details = require('../models/storeitems')

const getitems = async (req,res) => {

    const items = await details.find({})

    res.status(200).json(items)

}

const getitem = async (req,res) => {

    const { id } = req.params

    const items = await details.findById(id)

    if(!items){
        res.status(404).json('empty list')
    }

    res.status(200).json(items)

}

const createitem = async (req,res) => {

    const {title,prize,description,phone} = req.body

    try {

        const items = await details.create({title,prize,description,phone})
        res.status(200).json(items)

    }catch (error) {

        res.status(404).json({ error:error.message })
        
    }
}

module.exports = {

    getitems,
    getitem,
    createitem

}