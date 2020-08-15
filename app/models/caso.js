module.exports = (sequelize, DataTypes) => {
    const Caso = sequelize.define('Caso', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        city: {
            allowNull: true,
            type: DataTypes.STRING
        },
        city_ibge_code: {
            allowNull: false,
            type: DataTypes.STRING
        },
        confirmed: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        confirmed_per_100k_inhabitants: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        date: {
            allowNull: false,
            type: DataTypes.DATE
        },
        death_rate: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        deaths: {
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
    },
        {
            freezeTableName: true,
            tableName: 'CASO',
            timestamps: true,
            updatedAt: false
        }
    )

    return Caso
}