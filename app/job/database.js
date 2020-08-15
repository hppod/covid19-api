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

module.exports = { insertData_Caso }