const express =  require('express')

const { getitems, getitem, createitem, deleteone, updateitem } = require('../controllers/controlstore')

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

routes.delete('/:id',
    deleteone  
)

routes.patch('/:id',()=>
    updateitem
)

module.exports = routes