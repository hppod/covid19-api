const { CasoFull } = require('./../../models')

const insertDataInDb = async data => {
    console.log(`Inserindo ${data.length} registros no banco de dados`)
    const result = await CasoFull.bulkCreate(data)
    return await result['length']
}

const checkIfDbIsPopulated = async () => {
    console.log('Consultando se existem registros no banco de dados')
    const result = await CasoFull.findAndCountAll()
    return await result['count']
}

const updateOldDataInDb = async () => {
    console.log('Atualizando registros antigos')
    const result = await CasoFull.update({ is_last: 0 }, { where: { is_last: 1 } })
    console.log(`${result['length']} registros foram atualizados com sucesso`)
    return await result['length']
}

const searchIfDataExistsByDate = async dateP => {
    console.log(`Consultando registros pela data: ${dateP}`)
    const result = await CasoFull.findAndCountAll({ where: { date: dateP } })
    return await result['count']
}

module.exports = {
    insertDataInDb,
    checkIfDbIsPopulated,
    updateOldDataInDb,
    searchIfDataExistsByDate
}