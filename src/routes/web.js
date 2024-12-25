const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Namdeptrai ne!')
})

router.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

router.get('/123', (req, res) => {
    res.send('<h1> Nam dep trai vl </h1>')
})

module.exports = router;