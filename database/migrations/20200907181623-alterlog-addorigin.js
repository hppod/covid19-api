module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.addColumn('LOG', 'origin', {
      allowNull: false,
      type: DataTypes.STRING
    })
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('LOG', 'origin')
  }
};
