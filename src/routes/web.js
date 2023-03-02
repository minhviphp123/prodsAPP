const express = require('express');
const { home } = require('../controller/ctl');
const router = express.Router();

function initRoute(app) {

    router.get('/', home);

    return app.use('/', router);
}

module.exports = initRoute;