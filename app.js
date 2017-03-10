var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('a', { title: 'Welcome to Javascript 101', message: 'We are a JavaScript meetup group in Bristol, UK.' })
})

app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})
