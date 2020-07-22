const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('googleapps', 'postgres', 'PostgreSQL123', {
  host: 'ec2-3-129-59-18.us-east-2.compute.amazonaws.com',
  dialect: 'postgres',
  logging: false
});


sequelize.authenticate()
  .then(function(errors) {
    console.log('DB Connection has been established successfully.')
  })
  .catch(function(errors) {console.log('Unable to connect to the database:', errors)})

  class Application extends Model {}
  Application.init({
      name : {
        type : DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      author : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      imageUrl : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      category : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      updatedAt : {//When Posting/Putting, I get this errror updatedAt cannot be an array or an object. However, to seed the db, it looks like I need datatype string for faker.date.past to work?
        // type : DataTypes.STRING,
        type : DataTypes.DATE,
        allowNull: false,
      },
      size : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      editorChoice : {
        type : DataTypes.BOOLEAN,
        allowNull: false,
      },
      rating : {
        type : DataTypes.DECIMAL,
        allowNull: false,
      },
      ratings : {
        type : DataTypes.DECIMAL,
        allowNull: false,
      },
      currentVersion : {
        type : DataTypes.DECIMAL,
        allowNull: false,
      },
      installs : {
        type : DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt : {//When Posting/Putting, I get this errror updatedAt cannot be an array or an object. However, to seed the db, it looks like I need datatype string for faker.date.past to work?
        // type : DataTypes.STRING,
        type : DataTypes.DATE,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Application',
    });

  sequelize.sync();

  module.exports.Application = Application;
