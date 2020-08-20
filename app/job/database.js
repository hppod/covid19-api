const { Caso } = require('./../models')

const insertDataInDb = async data => {
    const result = await Caso.bulkCreate(data)
    return await result['length']
}

const checkIfDbIsPopulated = async () => {
    const result = await Caso.findAndCountAll()
    return await result['count']
}

const updateOldDataInDb = async () => {
    const result = await Caso.update({ is_last: 0 }, { where: { is_last: 1 } })
    return await result['length']
}

module.exports = { insertDataInDb, checkIfDbIsPopulated, updateOldDataInDb }