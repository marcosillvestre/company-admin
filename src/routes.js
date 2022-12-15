const { Router } = require('express')
const express = require('express')
const SessionsController = require('./app/controllers/Sessions')
const UserController = require('./app/controllers/User')

const routes = new Router()


routes.post('/letters', UserController.store)
routes.get('/letters', UserController.index)

routes.post('/login', SessionsController.store)



module.exports = routes