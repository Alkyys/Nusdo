const express = require('express');
const router = express.Router();
const Car = require('./../models/modelCar');

router.get('/car/all', function (req, res, next) {
    Car.find()
        .then((cars) => {
            res.json(cars)
        })
        .catch((err) => next(err))
});

router.get('/car/:id', function (req, res, next) {
    Car.findById({_id:req.params.id})
        .then((cars) => {
            res.json(cars)
        })
        .catch((err) => next(err))
});

module.exports = router;
