const db = require('./index.js');
const faker = require('faker');


const insertSampleApps = function() {
  for(var i = 1; i <= 100 ; i++) {
    var fullName = faker.name.firstName() + ' ' + faker.name.lastName();
    var categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
    var randomIndex = Math.floor((Math.random() * 5));
    var randomVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    var randomRating = (Math.floor((Math.random() * 10) + 1))/2;
    db.Application.create({
      id : i,
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
    })
  }
};

insertSampleApps()