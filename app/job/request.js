const request = require('request')

function makeRequest_Caso(callback) {
    request('http://www.google.com.br', (error, response, body) => {
        if (error) {
            callback(error)
        } else {
            callback(response)
        }
    })
}

module.exports = { makeRequest_Caso }