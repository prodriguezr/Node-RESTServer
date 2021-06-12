require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.app.use(morgan('dev'));
        
        this.routes();
    }

    routes() {
        this.app.get('/', (req, res) => {
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