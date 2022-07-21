const express = require('express')
const controller = require('../controllers/user.js')

const router = express.Router()

router.get('/users', controller.GET)
router.post('/users', controller.POST)
router.put('/users', controller.PUT)
router.delete('/users', controller.DELETE)


module.exports = router