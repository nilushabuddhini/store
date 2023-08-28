const { default: mongoose } = require('mongoose')
const systemitems = require('../models/systemitems')

const getSystems = async (req, res) =>{

    const back = await systemitems.find({})

    res.status(200).json(back)

}

const getSystem = async (req, res) => {

    const { id } = req.params

    const back = await systemitems.findById(id)

    if(!back){
        res.status(404).json({error:'Error'})
    }

    res.status(200).json(back)
}

const createSystem = async (req,res) => {

    const {adress,idnum,phonenum,order,img,title,phoneOrder} = req.body

    try{
       const back = await systemitems.create({adress,idnum,phonenum,order,img,title,phoneOrder})
       res.status(200).json(back)
    }
    catch(error){
        res.status(404).json({error:error.message})
    }
}

module.exports ={

    getSystem,
    getSystems,
    createSystem

}