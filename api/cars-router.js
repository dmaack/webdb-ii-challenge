const express = require('express');
const db = require('../data/db-config')

const router = express.Router();

// CREATE Requests
router.post('/', (req,res) => {
    const newCar = req.body;
    
    db('cars')
    .insert(newCar)
        .then(add => {
            res.status(201).json({ message: `Success! You have added a vehile to the database`})
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to add vehicle'})
        })
})

// READ Requests
router.get('/', (req,res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get cars from database'})
        })
})

router.get('/:id', (req,res) => {
    const id = req.params.id;

    db('cars')
    .where({id: req.params.id})
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(500).json({error: `Failed this car from database`})
        })
})
// UPDATE Requests
router.put('/:id', (req,res) => {
    const id = req.params.id;
    const updates = req.body;

    db('cars')
    .where({id: req.params.id})
    .update(updates)
        .then(update => {
            res.status(201).json({ message: `Success! Vehilcle with ID ${id} was updated`})
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to update the vehicle'})
        })
})

// DELETE Requests
router.delete('/:id', (req,res) => {
    const id = req.params.id;

    db('cars')
    .where({id: req.params.id})
    .del()
    .then(remove => {
        res.status(201).json({ message: `Success! Vehile with ID ${id} was deleted`})
    })
    .catch(err => {
        res.status(500).json({ error: ''})
    })
})

//Middleware

module.exports = router;