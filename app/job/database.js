const { Caso } = require('./../models')

function insertData_Caso(data, callback) {
    Caso.bulkCreate(data)
        .then(() => {
            console.log(`${data.length} novos registros foram inseridos na tabela CASO`)
            callback('Inserido com sucesso')
        })
        .catch(error => {
            console.log('Erro ao inserir caso')
            callback(error)
        })
}

function hasData_Caso(callback) {
    Caso.findAndCountAll()
        .then(({ count }) => {
            const hasData = count > 0 ? true : false
            callback(hasData)
        })
        .catch(error => {
            callback(error)
        })
}

module.exports = { insertData_Caso, hasData_Caso }