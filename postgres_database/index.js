const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('googleapps', 'postgres', '5432', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(function(errors) {
    console.log('Connection has been established successfully.')
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
      updatedAt : {
        type : DataTypes.STRING,
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
      createdAt : {
        type : DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Application',
    });

  sequelize.sync({force: true});

  module.exports.Application = Application;