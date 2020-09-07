module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('Log', {
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
        },
        origin: {
            allowNull: false,
            type: DataTypes.STRING
        },
        operation: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },
        {
            freezeTableName: true,
            tableName: 'LOG',
            timestamps: false,
            updatedAt: false
        }
    )

    return Log
}