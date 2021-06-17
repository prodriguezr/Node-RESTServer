require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { dbConnection } = require('../db/db-connection');
const { validateJSON } = require('../middlewares/validate-json');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routesPath = 
        {
            users: '/api/users',
            roles: '/api/roles',
            auth:  '/api/auth',
        }

        // DB Connection
        this.db();

        this.middlewares();

        // Routes in the app        
        this.routes();
    }

    async db() {
        await dbConnection();        
    }

    // Midddlewares
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.static('public'));
        this.app.use(cors());
        
        // Read and parse body
        this.app.use(express.json());

        // Validate if the json is well formed
        this.app.use(validateJSON);
    }

    routes() {
        this.app.use(this.routesPath.users, require('./routes/users.routes'));
        this.app.use(this.routesPath.roles, require('./routes/roles.routes'));
        this.app.use(this.routesPath.auth, require('./routes/auth.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;