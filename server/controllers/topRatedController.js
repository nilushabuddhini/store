const TopRated = require('../models/toprateditems') 
const { default:mongoose } = require('mongoose')

const getTops = async (req, res) => {
    const topRated = await TopRated.find({})
    res.status(200).json(topRated)
}

const getTop = async (req, res) => {
    const { id } = req.params 
    const topRated = await TopRated.findById(id)
    res.status(200).json(topRated)
}

const createTop = async (req, res) => {
    const {title,prize,description,phone,image} = req.body 
    try {
        const topRated = await TopRated.create({title,prize,description,phone,image})
        res.status(200).json(topRated)
    } catch (error) {
        res.status(404).json({ error:error.message })
    }
}

module.exports = { getTops, getTop, createTop }