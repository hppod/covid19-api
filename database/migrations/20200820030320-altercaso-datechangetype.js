module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.changeColumn('CASO', 'date', {
      allowNull: false,
      type: DataTypes.DATEONLY
    })
  },

  down: async (queryInterface) => {
    return queryInterface.changeColumn('CASO', 'date')
  }
};