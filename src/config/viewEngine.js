const path = require('path');
const express = require('express');


const configViewEngine = (app) => {
    console.log('check', path.join('./src', 'views'))
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'pug');
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;