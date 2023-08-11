const express =  require('express')

const { getitems, getitem, createitem } = require('../controllers/controlstore')

const routes = express.Router()

routes.get('/',
    getitems
)

routes.get('/:id',
    getitem
)

routes.post('/',
    createitem
)

module.exports = routes