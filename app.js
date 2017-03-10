var express = require('express')
var app = express()
var logoList = require('./model/logo')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Welcome to Javascript 101',
    message: 'We are a JavaScript meetup group in Bristol, UK.',
    logoList: logoList
  })
})

app.listen(8888, function () {
  console.log('🌎 JavaScript 101 website is running at http://0.0.0.0:8888')
})
