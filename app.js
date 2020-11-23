const express = require('express');

const app = express();


app.set('view engine', 'pug');

//GET ROUTES

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is!" });
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

// POST ROUTES

app.post('/hello', (req,res) => {
    console.dir(req.body);
    res.render('hello');
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});



