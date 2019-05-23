const express = require('express');
const router = express.Router();
const User = require('./../models/modelUser');


// route de bases test CRUD
router.get('/user/all', function (req, res, next) {
    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => next(err))
});

router.get('/user/:id', function (req, res, next) {
    User.findById({_id:req.params.id})
        .then((user) => {
            res.json(user)
        })
        .catch((err) => next(err))
});

router.post('/user', (req, res) => {
    return res.send('POST HTTP method on user resource');
});
//
// router.put('/user/:userId', (req, res) => {
//     return res.send(
//         `PUT HTTP method on user/${req.params.userId} resource`,
//     );
// });
//
// router.delete('/user/:userId', (req, res) => {
//     return res.send(
//         `DELETE HTTP method on user/${req.params.userId} resource`,
//     );
// });

module.exports = router;
