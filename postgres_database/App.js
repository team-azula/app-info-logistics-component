const { Sequelize, DataTypes } = require('sequelize');



const application = (sequelize, DataTypes) => {
  const Application = sequelize.define('application', {
    name : {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    rating : {
      type : DataTypes.DECIMAL,
      allowNull: false,
    },
    ratings : {
      type : DataTypes.DECIMAL,
      allowNull: false,
    },
    currentVersion : {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    installs : {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    editorChoice : {
      type : DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Application;
};

// sequelize.sync()
// export default application;