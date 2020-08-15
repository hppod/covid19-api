module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('CASO_FULL', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING
      },
      city_ibge_code: {
        allowNull: false,
        type: DataTypes.STRING
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      epidemiological_week: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      estimated_population_2019: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      is_last: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      is_repeated: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      last_available_confirmed: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      last_available_confirmed_per_100k_inhabitants: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },
      last_available_date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      last_available_death_rate: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },
      last_available_deaths: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      new_confirmed: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      new_deaths: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      order_for_place: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      place_type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('CASO_FULL')
  }
};
