var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.use(bodyParser.json());
router.get('/accueil', function(req, res, next) {
    res.render('index', {});
});
router.get('/', function(req, res, next) {
    res.render('connection');
});
router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/accueil');
});
router.get('/chats', function(req, res, next) {
    res.render('chats');
});
router.get('/patients', function(req, res, next) {
    res.render('patients');
});
router.get('/pprofile', function(req, res, next) {
    res.render('patient-profile');
});





module.exports = router;