const { Caso } = require('../../models')

const insertDataInDb = async data => {
    console.log(`Inserindo ${data.length} registros no banco de dados`)
    const result = await Caso.bulkCreate(data)
    return await result['length']
}

const checkIfDbIsPopulated = async () => {
    console.log('Consultando se existem registros no banco de dados')
    const result = await Caso.findAndCountAll()
    return await result['count']
}

const updateOldDataInDb = async () => {
    console.log('Atualizando registros antigos')
    const result = await Caso.update({ is_last: 0 }, { where: { is_last: 1 } })
    return await result['length']
}

const searchIfDataExistsByDate = async dateP => {
    console.log(`Consultando registros pela data: ${dateP}`)
    const result = await Caso.findAndCountAll({ where: { date: dateP } })
    return await result['count']
}

module.exports = { insertDataInDb, checkIfDbIsPopulated, updateOldDataInDb, searchIfDataExistsByDate }