const express = require('express');
const Parser = require('body-parser');
const path = require('path');
const getReposByUsername = require('../helpers/github.js');
const Save = require('../database/index.js');
//import JSX to use their data //--> 
//
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(Parser.urlencoded({ extended:false }));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('what is req', req.body)

  getReposByUsername.getReposByUsername(req.body.data, (err, repoData) => {
    if (err) {
      console.log('error')    
      // console.log(err);
    } else {
      Save.save(err, repoData)
    }
  })
  res.end('res end in POST')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('...GET request!');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

