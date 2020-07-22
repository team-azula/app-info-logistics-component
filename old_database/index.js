const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/app_info';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;