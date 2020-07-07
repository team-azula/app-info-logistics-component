const App = require('../database/App.js');
const mongoose = require('mongoose');

describe ('Database: MongoDB Tests', () => {

  test('check if seed script added 100 Apps to database', (done) => {
    App.find()
    .then(
      data => {
        expect(data.length).toEqual(100);
        done();
      })
    .catch(
      err => {
        if(err) {
          console.log(err);
        }
      });
  });

  test('check collection to make sure documents have the right data points', (done) => {
    App.findOne()
    .then(
      data => {
        expect(data).toEqual(
          expect.objectContaining({
            id : expect.any(Number),
            name : expect.any(String),
            author : expect.any(String),
            imageUrl : expect.any(String),
            category : expect.any(String),
            updatedAt : expect.any(String),
            size : expect.any(String),
            editorChoice : expect.any(Boolean),
            rating : expect.any(Number),
            ratings : expect.any(Number),
            currentVersion : expect.any(Number),
            installs : expect.any(Number)
          })
        );
        mongoose.connection.close();
        done();
      }
    )
    .catch(
      err => {
        if(err) {
          console.log(err);
        }
      });
  })
});