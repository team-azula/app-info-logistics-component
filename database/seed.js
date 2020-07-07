const db = require('./index.js');
const App = require('./App.js');
const faker = require('faker');

const sampleApps = [];

var addFakerData = function() {
  for(var i = 1; i <= 100 ; i++) {
    var fullName = faker.name.firstName() + ' ' + faker.name.lastName();
    var categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
    var images = [
      'https://i.picsum.photos/id/538/640/640.jpg',
      'https://i.picsum.photos/id/58/600/600.jpg',
      'https://i.picsum.photos/id/873/600/600.jpg',
      'https://i.picsum.photos/id/547/600/600.jpg',
      'https://i.picsum.photos/id/691/600/600.jpg',
      'https://i.picsum.photos/id/680/600/600.jpg',
      'https://i.picsum.photos/id/703/600/600.jpg',
      'https://i.picsum.photos/id/937/600/600.jpg',
      'https://i.picsum.photos/id/650/600/600.jpg',
      'https://i.picsum.photos/id/668/600/600.jpg',
      'https://i.picsum.photos/id/619/600/600.jpg',
      'https://i.picsum.photos/id/548/600/600.jpg',
      'https://i.picsum.photos/id/401/600/600.jpg',
      'https://i.picsum.photos/id/338/600/600.jpg',
      'https://i.picsum.photos/id/558/600/600.jpg',
      'https://i.picsum.photos/id/2/600/600.jpg',
      'https://i.picsum.photos/id/310/600/600.jpg',
      'https://i.picsum.photos/id/152/600/600.jpg',
      'https://i.picsum.photos/id/386/600/600.jpg',
      'https://i.picsum.photos/id/835/600/600.jpg',
      'https://i.picsum.photos/id/521/600/600.jpg',
      'https://i.picsum.photos/id/586/600/600.jpg',
      'https://i.picsum.photos/id/239/600/600.jpg',
      'https://i.picsum.photos/id/617/600/600.jpg',
      'https://i.picsum.photos/id/1019/600/600.jpg',
      'https://i.picsum.photos/id/435/600/600.jpg',
      'https://i.picsum.photos/id/239/600/600.jpg',
      'https://i.picsum.photos/id/993/600/600.jpg',
      'https://i.picsum.photos/id/985/600/600.jpg',
      'https://i.picsum.photos/id/1018/600/600.jpg',
      'https://i.picsum.photos/id/805/600/600.jpg',
      'https://i.picsum.photos/id/1008/600/600.jpg',
      'https://i.picsum.photos/id/628/600/600.jpg',
      'https://i.picsum.photos/id/141/600/600.jpg',
      'https://i.picsum.photos/id/1040/600/600.jpg',
      'https://i.picsum.photos/id/294/600/600.jpg',
      'https://i.picsum.photos/id/504/600/600.jpg',
      'https://i.picsum.photos/id/389/600/600.jpg',
      'https://i.picsum.photos/id/616/600/600.jpg',
      'https://i.picsum.photos/id/1053/600/600.jpg',
      'https://i.picsum.photos/id/545/600/600.jpg',
      'https://i.picsum.photos/id/622/600/600.jpg',
      'https://i.picsum.photos/id/572/600/600.jpg',
      'https://i.picsum.photos/id/794/600/600.jpg',
      'https://i.picsum.photos/id/145/600/600.jpg',
  ]
    var randomIndex = Math.floor((Math.random() * 5));
    var randomVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    var randomRating = (Math.floor((Math.random() * 10) + 1))/2;
    var obj = {
      id : i,
      name : faker.commerce.product(),
      author : fullName,
      imageUrl : faker.random.arrayElement(images),
      category : categories[randomIndex],
      updatedAt : faker.date.past(),
      size : faker.random.number() + 'MB',
      editorChoice : faker.random.boolean(),
      rating: randomRating,
      ratings: faker.random.number(),
      currentVersion: randomVersion,
      installs : faker.random.number()
    }
    sampleApps.push(obj);
  }
}();

const insertSampleApps = function() {
  App.create(sampleApps)
    .then(() => db.disconnect());
};

insertSampleApps();