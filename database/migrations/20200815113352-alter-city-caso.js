const { query } = require("express");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.changeColumn('CASO', 'city', {
      allowNull: true,
      type: DataTypes.STRING
    })
  },

  down: async (queryInterface) => {
    return queryInterface.changeColumn('CASO', 'city')
  }
};
