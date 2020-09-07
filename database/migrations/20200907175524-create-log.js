module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('LOG', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('LOG')
  }
};
