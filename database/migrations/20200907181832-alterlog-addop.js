module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.addColumn('LOG', 'operation', {
      allowNull: false,
      type: DataTypes.STRING
    })
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('LOG', 'operation')
  }
};
