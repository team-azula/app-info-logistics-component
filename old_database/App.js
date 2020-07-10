const mongoose = require('mongoose');
const db = require('./index.js');

const appSchema = new mongoose.Schema({
  id : {type: Number, unique: true},
  name : String,
  author : String,
  imageUrl : String,
  category : String,
  updatedAt : String,
  size : String,
  editorChoice : Boolean,
  rating: Number,
  ratings: Number,
  currentVersion: Number,
  installs : Number
})

const App = mongoose.model('App', appSchema);

module.exports = App;


