const express =  require('express')

// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination:(req, file, cb) => {
//         cb(null, '../client/public/assets')
//     },
//     filename:(req, file, cb) => {
//         cb(null, Date.now() + file.originalname())
//     }
// })

// const upload = multer({ storage:storage })

const { getitems, getitem, deleteone, updateitem } = require('../controllers/controlstore')

const routes = express.Router() 

routes.get('/',
    getitems
)

routes.get('/:id',
    getitem
)

routes.delete('/:id',
    deleteone  
) 

routes.patch('/:id',
    updateitem
)

module.exports = routes