module.exports = {
  up: async (queryInterface) => {
    return queryInterface.removeColumn('CASO', 'createdAt')
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.addColumn('CASO', 'createdAt', {
      allowNull: false,
      type: DataTypes.DATE
    })
  }
};
