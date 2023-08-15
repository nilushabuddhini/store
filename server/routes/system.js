const express = require('express')

const { getSystems, getSystem, createSystem } = require('../controllers/systemcontrol')

const system = express.Router()

system.get('/',
    getSystems
)

system.get('/:id',
    getSystem
)

system.post('/',
    createSystem
)

module.exports = system