const express = require('express')

const routes = express.Router()

const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename:(req, file, cb) => {
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage:storage
})

routes.post('/image', upload.single('image'))

module.exports = routes