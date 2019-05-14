import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';
import models from './models';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/session', routes.session);
app.use('/user', routes.user);
app.use('/messages', routes.message);

// route de bases test CRUD
app.get('/user', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

app.post('/user', (req, res) => {
    return res.send('POST HTTP method on user resource');
});

app.put('/user/:userId', (req, res) => {
    return res.send(
        `PUT HTTP method on user/${req.params.userId} resource`,
    );
});

app.delete('/user/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.user[1],
    };
    next();
});











app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);
