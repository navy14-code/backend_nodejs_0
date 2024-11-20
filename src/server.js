const express = require('express') //commonjs
const path = require('path')
require('dotenv').config();
// import express from 'express'; //es modules


const app = express() //app express
const port = process.env.PORT || 8888 // prot
const hostname = process.env.HOST_NAME

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//config static files
app.use(express.static('public'))
// khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

app.get('/123', (req, res) => {
    res.send('<h1> Nam dep trai vl </h1>')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})