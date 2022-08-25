'use strict'

const express = require('express')

const userController = require('../controller/user')
const router = express.Router()

// middleware that is specific to this router
router.get('/', userController.getUser)
router.post('/', userController.cteateUser)

module.exports = router
