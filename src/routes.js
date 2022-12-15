const { Router } = require('express')
const express = require('express')
const UserController = require('./app/controllers/User')

const routes = new Router()


routes.post('/letters', UserController.store)
routes.get('/letters', UserController.index)


module.exports = routes