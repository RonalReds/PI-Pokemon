const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Types', {
    /* id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }, */
      name: {
        type: DataTypes.STRING,
        unique : true,
      },
    }, {timestamps: false});
  };