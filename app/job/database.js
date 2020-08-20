const { Caso } = require('./../models')

const insertData_Caso = async data => {
    const result = await Caso.bulkCreate(data)
    return await result['length']
}

const hasData_Caso = async () => {
    const result = await Caso.findAndCountAll()
    return await result['count']
}

const updateOldData_Caso = async () => {
    const result = await Caso.update({ is_last: 0 }, { where: { is_last: 1 } })
    return await result['length']
}

module.exports = { insertData_Caso, hasData_Caso, updateOldData_Caso }