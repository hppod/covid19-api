const request = require('request')
const { endpoint_caso, endpoint_caso_islast } = require('./endpoints.consts')
const db = require('./database')

function makeRequest_Caso(callback, next) {
    const date = new Date().toISOString()

    db.updateOldData_Caso((result, error) => {
        if (error) {
            callback(error)
            next()
        } else {
            callback(result)
        }
    })

    // db.hasData_Caso((count, error) => {
    //     if (error) {
    //         callback(error)
    //         next()
    //     } else {
    //         const URL = count > 0 ? endpoint_caso_islast : endpoint_caso
    //         const isLast = URL == endpoint_caso_islast ? true : false

    //         console.log(`Requisitando dados para ${URL}`)

    //         request(URL, (error, response, body) => {
    //             if (error) {
    //                 console.log('Houve um erro ao processar')
    //                 callback(error)
    //                 next()
    //             } else {
    //                 let firstPos = JSON.parse(body)
    //                 firstPos = firstPos['results'].splice(0, 2)
    //                 console.log('Dados recuperado com sucesso')
    //                 db.insertData_Caso(firstPos, (result, error) => {
    //                     if (error) {
    //                         callback(error)
    //                         next()
    //                     } else {
    //                         callback(result)
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })
}

module.exports = { makeRequest_Caso }