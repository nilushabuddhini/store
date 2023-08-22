const express = require('express')

const { getGlobals, getGlobal, createGlobal } = require('../controllers/globalstorControl')

const globalexpress = express.Router()

globalexpress.get('/',
    getGlobals
)

globalexpress.get('/:id',
    getGlobal
)

globalexpress.post('/',
    createGlobal
)

module.exports = globalexpress