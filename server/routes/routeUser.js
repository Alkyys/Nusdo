const express = require('express');
const router = express.Router();
const User = require('./../models/modelUser');

router.get('/', function (req, res, next) {
    User.find({})
        .then((users) => {
            res.json(users)
        })
        .catch((err) => next(err))
});

// route de bases test CRUD

// router.post('/user', (req, res) => {
//     return res.send('POST HTTP method on user resource');
// });
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
