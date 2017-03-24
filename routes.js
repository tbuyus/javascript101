var express = require('express')
var router = express.Router()
var logoList = require('./model/logo')
var doc = require('./utils/doc')
var quotesInspiration = require('./public/js/quotesInspiration')

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Welcome to JavaScript 101',
    message: 'We are a JavaScript meetup group in Bristol, UK.',
    logoList: logoList,
    quotesInspiration: quotesInspiration
  })
})

router.get('/getting-started', function (req, res) {
  doc.render('getting-started.md', res)
})

router.get('/getting-started/git', function (req, res) {
  doc.render('git.md', res)
})

router.get('/about', function (req, res) {
  doc.render('about.md', res)
})

module.exports = router
