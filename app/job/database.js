const { Caso } = require('./../models')

function insertData_Caso(data, callback) {
    Caso.create(data)
        .then(() => {
            console.log('Caso inserido com sucesso')
            callback('Inserido com sucesso')
        })
        .catch(error => {
            console.log('Erro ao inserir caso')
            callback(error)
        })
}

module.exports = { insertData_Caso }