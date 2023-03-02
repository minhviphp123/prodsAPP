const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require('./config/connectDB');
const initRoute = require('./routes/web');

const app = express();
const port = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initRoute(app);
connectDB();

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})