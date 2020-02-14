const express = require('express');
const cors = require('cors');

const config = require('./config');
const posts = require('./app/posts');
const fileDb = require('./fileDb');

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/posts', posts);

const run = async () => {
    await fileDb.init();

    app.listen(config.port, () => {
        console.log(`life on http://localhost:${config.port}/`);
    });
};

run().catch(e => {
    console.error(e);
});