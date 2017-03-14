var express = require('express')
var router = express.Router()
var logoList = require('./model/logo')
var doc = require('./utils/doc')

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Welcome to JavaScript 101',
    message: 'We are a JavaScript meetup group in Bristol, UK.',
    logoList: logoList
  })
})

router.get('/getting-started', function (req, res) {
  doc.render('getting-started.md', res)
})

module.exports = router
