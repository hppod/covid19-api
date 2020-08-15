const request = require('request')
const { endpoint_caso } = require('./endpoints.consts')
const db = require('./database')

function makeRequest_Caso(callback, next) {
    console.log(`Requisitando dados para ${endpoint_caso}`)
    request(endpoint_caso, (error, response, body) => {
        if (error) {
            console.log('Houve um erro ao processar')
            callback(error)
            next()
        } else {
            let firstPos = JSON.parse(body)
            firstPos = firstPos['results'][1]
            console.log('Dado recuperado com sucesso')
            db.insertData_Caso(firstPos, (result, error) => {
                if (error) {
                    callback(error)
                    next()
                } else {
                    callback(result)
                }
            })
        }
    })
}

module.exports = { makeRequest_Caso }