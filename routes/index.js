const express = require ('express');
const router = express.Router();

//GET ROUTES

router.get('/', (req, res) => {
    const name = req.cookies.username
    if(name) {
        res.render('index', { name: name });
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});


// POST ROUTES

router.post('/hello', (req,res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;