const express = require('express');
const carsRouter = require('./api/cars-router');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);
// server.use((req,res) => {
//     res.status(404).send('Aint nobody got time for that')
// })

server.get('/', (req,res) => {
    res.send(`<h2> Let's write some Migrations and Seeds! </h2>`)
})

module.exports = server;