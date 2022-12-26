const { Router } = require('express')
const express = require('express')
const SessionsController = require('./app/controllers/Sessions')
const UserController = require('./app/controllers/User')
const ProductionController = require('./app/controllers/Production')
const MachineController = require('./app/controllers/Machines')

const routes = new Router()


routes.post('/cadastro', UserController.store)
routes.get('/cadastro', UserController.index)

routes.post('/login', SessionsController.store)
routes.get('/login', SessionsController.index)


routes.post('/enviar-producao', ProductionController.store)
routes.get('/producao', ProductionController.index)

routes.post('/maquinas', MachineController.store)
routes.get('/todas-maquinas', MachineController.index)

module.exports = routes

