const { query } = require("express");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.addColumn('CASO', 'createdAt', {
      allowNull: false,
      type: DataTypes.DATE
    })
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('CASO', 'createdAt')
  }
};
