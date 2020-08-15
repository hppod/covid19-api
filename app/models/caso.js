module.exports = (sequelize, DataTypes) => {
    const Caso = sequelize.define('Caso', {
        id: DataTypes.INTEGER,
        city: DataTypes.STRING,
        city_ibge_code: DataTypes.STRING,
        confirmed: DataTypes.INTEGER,
        confimed_per_100k_inhabitants: DataTypes.DOUBLE,
        date: DataTypes.DATE,
        death_rate: DataTypes.DOUBLE,
        deaths: DataTypes.INTEGER,
        estimated_population_2019: DataTypes.INTEGER,
        is_last: DataTypes.BOOLEAN,
        order_for_place: DataTypes.INTEGER,
        place_type: DataTypes.STRING,
        state: DataTypes.STRING,
        createdAt: DataTypes.DATE
    })

    return Caso
}