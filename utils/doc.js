var path = require('path')
var fs = require('fs')
var marked = require('marked')
var REPO_URL = 'https://github.com/CodeHubOrg/javascript101/blob/master/docs/'

var render = function(filename, res) {
  var file = path.join(__dirname, '../docs' ,filename)
  fs.readFile(file, 'utf8', function(err, contents) {
    err ? console.error :
    res.render('doc', {
      content: marked(contents),
      editUrl: REPO_URL+filename
    })
  })
}

module.exports = {
  render: render
}
