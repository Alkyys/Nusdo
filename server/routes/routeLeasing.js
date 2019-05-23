const express = require('express');
const router = express.Router();
const Leasing = require('./../models/modelLeasing');

router.get('/leasing/all', function (req, res, next) {
    Leasing.find()
        .then((leasings) => {
            res.json(leasings)
        })
        .catch((err) => next(err))
});

router.get('/leasing/:id', function (req, res, next) {
    Leasing.findById({_id:req.params.id})
        .then((leasings) => {
            res.json(leasings)
        })
        .catch((err) => next(err))
});

module.exports = router;
