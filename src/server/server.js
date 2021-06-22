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
            auth:  '/api/auth',
            categories: '/api/categories',
            roles: '/api/roles',
            users: '/api/users',
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
        const { 
            Auth, 
            Categories, 
            Roles, 
            Users 
        } = require('./routes');

        this.app.use(this.routesPath.auth, Auth);
        this.app.use(this.routesPath.categories, Categories);
        this.app.use(this.routesPath.roles, Roles);
        this.app.use(this.routesPath.users, Users);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;