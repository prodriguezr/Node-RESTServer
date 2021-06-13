require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routesPath = 
        {
            users: '/api/users'
        };

        this.middlewares();

        // Routes in the app        
        this.routes();
    }

    // Midddlewares
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.static('public'));
        this.app.use(cors());

        // Read and parse body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.routesPath.users, require('./routes/users.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;