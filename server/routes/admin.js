const express = require('express')

const { getitems, createitem } = require('../controllers/AdminController')

const requireAuth = require('../middleware/requireAuth')

const routes = express.Router()

routes.use(requireAuth)

routes.get('/',
    getitems
)

routes.post('/',
    createitem
)

module.exports = routes