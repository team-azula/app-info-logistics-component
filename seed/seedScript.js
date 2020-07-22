const fs = require('fs');
const faker = require('faker');


const writer = fs.createWriteStream('applications.csv',{flags: 'w'})
.on('finish', ()=> {
  console.log('Finished Writing')
})
.on('error', (err)=> {
  console.log(err)
})
writer.write('id,name,author,imageUrl,category,updatedAt,size,editorChoice,rating,ratings,currentVersion,installs,createdAt\n')
var start = Date.now();
for( var i = 1; i <= 10000000; i++) {
  var fullName = faker.name.firstName() + ' ' + faker.name.lastName();
  var categories = ['Social', 'Games', 'Finance', 'Lifestyle', 'Productivity'];
  var randomIndex = Math.floor((Math.random() * 5));
  var randomVersion = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
  var randomRating = (Math.floor((Math.random() * 10) + 1))/2;
  let entry = '';
  entry+=`${i},`;
  entry+= `${faker.commerce.product()},`;
  entry+=`${fullName},`;
  entry+=`${`https://loremflickr.com/160/160?lock=${Math.floor(Math.random() * 1000)}`},`;
  entry+=`"${categories[randomIndex]}",`;
  entry+=`${faker.date.past()},`;
  entry+=`${faker.random.number() + 'MB'},`;
  entry+=`${faker.random.boolean()},`;
  entry+=`${randomRating},`;
  entry+=`${faker.random.number()},`;
  entry+=`${randomVersion},`;
  entry+=`${faker.random.number()},`;
  entry+=`${faker.date.past()}\n`;
  writer.write(entry)
}
writer.end()
console.log('Done')

var end = Date.now();
var diff = end - start;
console.log('Start - ', start)
console.log('End - ', end)

console.log('Diff (ms) - ', diff)
console.log('Diff (sec) - ', diff/1000)