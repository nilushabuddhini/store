const express =  require('express')

const { getitems, getitem, createitem, deleteone, updateitem } = require('../controllers/controlstore')

const requireAuth = require('../middleware/requireAuth')

const routes = express.Router()

routes.use(requireAuth)

routes.get('/',
    getitems
)

routes.get('/:id',
    getitem
)

routes.post('/',
    createitem
)

routes.delete('/:id',
    deleteone  
)

routes.patch('/:id',
    updateitem
)

module.exports = routes