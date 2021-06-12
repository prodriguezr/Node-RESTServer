require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        // Routes in the app        
        this.routes();
    }

    // Midddlewares
    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello World!');
        });  
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;