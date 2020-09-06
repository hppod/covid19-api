const db = require('./db_caso')
const helpers = require('./../../helpers/helpers')
const { endpoint_caso, endpoint_caso_islast } = require('../endpoints.consts')
const got = require('got')

let resReturn, totalDataInserted, countPage

const fetchDataAPI = async (URL, limited) => {
    console.log(`Requisitando dados: ${URL}`)

    try {
        let { body } = await got(URL, { responseType: 'json' })

        if (body['results'] == undefined) {
            const seconds = body['available_in'].charAt(0) * 1000
            helpers.setMyTimeout(seconds)
            await fetchDataAPI(URL)
        }

        if (!limited) {
            resReturn = {
                nextUrl: body['next'],
                data: body['results']
            }
            return resReturn
        }

        countPage = Math.ceil(body['count'] / 1000)

        return body['results'][0]['date']
    } catch (e) {
        console.log(e)
    }

}

const fetchDataAddDB = async (dataset) => {
    while (countPage > 0) {
        const dataInserted = await db.insertDataInDb(dataset['data'])
        console.log(`${dataInserted} novos registros foram inseridos no banco de dados`)
        totalDataInserted = totalDataInserted + dataInserted
        countPage = countPage - 1
        if (countPage > 0) {
            helpers.setMyTimeout(3000)
            dataset = await fetchDataAPI(dataset['nextUrl'], false)
        }
    }
}

async function main() {
    console.log('Iniciando a entidade Caso')
    totalDataInserted = 0
    countPage = 0

    // const countDataCasoTable = await db.checkIfDbIsPopulated()
    const countDataCasoTable = 1
    const isLast = countDataCasoTable > 0 ? true : false
    const URL = countDataCasoTable > 0 ? endpoint_caso_islast : endpoint_caso

    let responseAPI = await fetchDataAPI(URL, true)

    if (isLast) {
        const dateFirstResult = responseAPI
        const countDataCasoTableByDate = await db.searchIfDataExistsByDate(dateFirstResult)

        if (countDataCasoTableByDate > 0) {
            console.log('Não é necessário novas ações no banco de dados')
        } else {
            await db.updateOldDataInDb()
            responseAPI = await fetchDataAPI(URL, false)
            await fetchDataAddDB(responseAPI)
        }
    } else {
        responseAPI = await fetchDataAPI(URL, false)
        await fetchDataAddDB(responseAPI)
    }

    if (totalDataInserted > 0) {
        console.log(`Ao total foram inseridos ${totalDataInserted} novos registros`)
    }

    console.log('Finalizando a entidade Caso')
}

module.exports = { main }