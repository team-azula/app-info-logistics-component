const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');



//Postgres
const db = require('../postgres_database/index.js');



const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://ec2-3-129-97-218.us-east-2.compute.amazonaws.com:3000');
  //res.header('Acces-Control-Allow-Origin', 'localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


//Does findAll make it more efficient?
app.get('/apps/:appid', (req, res) => {
  db.Application.findOne({where:
    {id: req.params.appid}})
  .then(
    data => {
      res.send(data);
    })
  .catch(
    err => {
      if(err) {
        console.log(err);
      }
    })
})

app.get('/loaderio-e58afe7aa43dda45f66822fe09f14331/', (req, res) => {
  res.send('loaderio-e58afe7aa43dda45f66822fe09f14331')
})

//WL NOTE: NEED to Optimize get requests - use caching?
// var dos = app.get('/apps/:appid', (req, res) => {
//   res.send('1')
// })

app.delete('/apps/:appid', (req, res) => {
  db.Application.findOne({where:
    {id: req.params.appid}})
  .then((result) => {
    result.destroy()
    res.send('Deleted')
    }
  )
  .catch(
    err => {
      if(err) {
        console.log(err);
      }
    }
  )
})

  //may need to change {author: "Warner Lin"} to req.body?
  app.put('/apps/:appid', (req, res) => {
    db.Application.update({author: "Warner Lin"}, {where:{id: req.params.appid}})
    .then(
      data => {
        res.send(data);
      })
    .catch(
      err => {
        if(err) {
          console.log(err);
          res.send(err);
        }
      })
    })



  // may need to change below to take in inputs?
app.post('/apps/:appid', (req, res) => {
  var fullName = faker.name.firstName() + ' ' + faker.name.lastName();
  var categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
  var randomIndex = Math.floor((Math.random() * 5));
  var randomVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  var randomRating = (Math.floor((Math.random() * 10) + 1))/2;
  var obj = {
    id : req.params.appid,
    name : faker.commerce.product(),
    author : fullName,
    imageUrl : `https://loremflickr.com/160/160?lock=${Math.floor(Math.random() * 1000)}`,
    category : categories[randomIndex],
    updatedAt : faker.date.past(),
    size : faker.random.number() + 'MB',
    editorChoice : faker.random.boolean(),
    rating: randomRating,
    ratings: faker.random.number(),
    currentVersion: randomVersion,
    installs : faker.random.number()
  };
  db.Application.create(obj)
  .then(
    data => {
      res.send(data);
    })
  .catch(
    err => {
      if(err) {
        console.log(err);
        res.send(err);
      }
    })
  })

const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;
