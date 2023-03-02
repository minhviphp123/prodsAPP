const db = require('../models/index');
const { getAllProducts } = require('../services/CRUDprodService');

//db.Users.create(..,..,..})


function home(req, res) {
    res.send('home');
}

module.exports = {
    home
}