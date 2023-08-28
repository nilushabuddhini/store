const { default: mongoose } = require('mongoose')
const Global = require('../models/globalItems')

const getGlobals = async (req, res) =>{

    const global = await Global.find({}).sort({ createdAt:-1 })

    res.status(200).json(global)

}

const getGlobal = async (req, res) => {

    const { id } = req.params

    const global = await Global.findById(id)

    if(!global){
        res.status(404).json({error:'Error'})
    }

    res.status(200).json(global)
}

const createGlobal = async (req,res) => {

    const {statusItem} = req.body

    try{
       const global = await systemitems.create({statusItem})
       res.status(200).json(global)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
}

module.exports ={

    getGlobal,
    getGlobals,
    createGlobal

}