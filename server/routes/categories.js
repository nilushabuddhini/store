const express = require('express')

const { getCategories, createCategory } = require('../controllers/categoryController')

const routes = express.Router()

routes.get('/', getCategories)

routes.post('/', createCategory)

module.exports = routes