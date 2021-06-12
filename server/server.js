require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

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
        this.app.use(cors());
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({ msg: "GET method"});
        });

        this.app.post('/api', (req, res) => {
            res.status(501).json({ msg: "POST method"});
        });

        this.app.put('/api', (req, res) => {
            res.status(501).json({ msg: "PUT method"});
        });

        this.app.delete('/api', (req, res) => {
            res.status(501).json({ msg: "DELETE method"});
        });  
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening at http://localhost:${this.port}`)
        });
    }
}

module.exports = Server;