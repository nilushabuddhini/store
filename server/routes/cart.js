const express = require('express')

const requireAuth = require('../middleware/requireAuth')

const { getcart, getcarts, createcart, deletecart, updatecart } = require('../controllers/cartController')

const router = express.Router()

router.use(requireAuth)

router.get('/', getcarts)

router.get('/:id', getcart)

router.post('/', createcart)

router.delete('/:id', deletecart)

router.patch('/', updatecart)

module.exports = router