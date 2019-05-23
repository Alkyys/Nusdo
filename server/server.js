import 'dotenv/config';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();

mongoose.Promise = global.Promise;

//import de Route
const routeCars = require('./routes/routeCars');
const routeLeasing = require('./routes/routeLeasing');
const routeUser = require('./routes/routeUser');

//const User = require('./models/modelUser');

mongoose.connect(process.env.URL_MONGOBD, {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is OK"))
    .catch(err => console.log(err));

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', routeCars, routeUser, routeLeasing);

// app.use((req, res, next) => {
//     req.context = {
//         models,
//         me: models.user[1],
//     };
//     next();
// });

app.listen(process.env.PORT, () =>
    console.log(`Server is running on: ${process.env.PORT}`),
);

module.exports = router;
