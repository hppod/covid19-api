module.exports = (sequelize, DataTypes) => {
    const CasoFull = sequelize.define('CasoFull', {
        id: DataTypes.INTEGER,
        city: DataTypes.STRING,
        city_ibge_code: DataTypes.STRING,
        date: DataTypes.DATE,
        epidemiological_week: DataTypes.INTEGER,
        estimated_population_2019: DataTypes.INTEGER,
        is_last: DataTypes.BOOLEAN,
        is_repeated: DataTypes.BOOLEAN,
        last_available_confirmed: DataTypes.INTEGER,
        last_available_confirmed_per_100k_inhabitants: DataTypes.DOUBLE,
        last_available_date: DataTypes.DATE,
        last_available_death_rate: DataTypes.DOUBLE,
        last_available_deaths: DataTypes.INTEGER,
        new_confirmed: DataTypes.INTEGER,
        new_deaths: DataTypes.INTEGER,
        order_for_place: DataTypes.INTEGER,
        place_type: DataTypes.STRING,
        state: DataTypes.STRING,
        createdAt: DataTypes.DATE
    })

    return CasoFull
}