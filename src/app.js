const cors = require('cors')
const express = require('express')
const routes = require('./routes')
require('./database')

class App {
    constructor() {
        this.app = express()
        this.app.use(cors())

        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(routes)
    }
}

module.exports = new App().app