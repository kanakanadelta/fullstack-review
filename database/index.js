const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  //GET ALL USER'S REPOS!!
  id: Number,
  name: String,
  html_url: String,
  owner: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, repoData) => {
  // TODO: Your code here
  if (err) {
    console.log('error saving DB', err);
  } else {
    let repos = JSON.parse(repoData.body);
    // console.log(JSON.parse(repoData.body));
    console.log(repos)

    repos.forEach( (eachRepo) => {
      var newRepo = {};
      
      newRepo.id = eachRepo.id;
      newRepo.name = eachRepo.name;
      newRepo.html_url = eachRepo.html_url;
      newRepo.owner = eachRepo.owner.login;
      newRepo.stars = eachRepo.stargazers_count;

      console.log(newRepo)

      //save in DB

    })

    console.log('saved in DB(mongo)!')
  }
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;