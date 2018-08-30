const request = require('request');
const config = require('../config.js');
const db = require('../database');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  console.log('username in helper: ', username)

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  //get request for github
  request.get(options, (err, repoData) => {
    if (err) {
      console.log(err, null);
    } else {
      // console.log('pass req.get in helper', repoData)  
      // console.log('********** vrepoData', repoData)
      // *** require repo data from other module
      callback(null, repoData);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;