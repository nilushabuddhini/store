const categories = require('../models/categoryModels')

const getCategories = async (req, res) => {

    const categ = await categories.find({}).sort({ createdAt:-1 })
    res.status(200).json(categ)

}

const createCategory = async (req, res) => {

    const {category, bgImage} = req.body 

    try {
        const categ = await categories.create({category, bgImage})
        res.status(200).json(categ)
    } catch (error) {
        res.status(401).json({error:error.message})
        console.log(error)
    }
} 

module.exports = {

    getCategories,
    createCategory
    
}