const express = require('express')
const router = express.Router()
const controller = require('./contoller')
const { ensureAuthenticated } = require('./auth')

router.get('/', ensureAuthenticated, controller.homeRoute)

router.post('/newContact', controller.newContact)

// router.get("/deleteContact/:id", controller.deleteContact);

router.post('/sendMail', controller.sendMail)

// router.post("/updateContact", controller.updateContact);

router.post('/newUser', controller.newUser)

router.post('/loginUser', controller.loginUser)

module.exports = router
