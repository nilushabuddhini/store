const express = require('express')

const { getTops, getTop, createTop } = require('../controllers/topRatedController')

const router = express.Router()

router.get('/', getTops)

router.get('/:id', getTop)

router.post('/', createTop)

module.exports = router