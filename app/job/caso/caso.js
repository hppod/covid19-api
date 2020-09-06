const db = require('./db_caso')
const helpers = require('./../../helpers/helpers')
const requests = require('./../../functions/fetch-api')
const { endpoint_caso, endpoint_caso_islast } = require('../endpoints.consts')

let totalDataInserted, countPage

const fetchDataAddDB = async (dataset) => {
    while (countPage > 0) {
        const dataInserted = await db.insertDataInDb(dataset['data'])

        totalDataInserted = totalDataInserted + dataInserted
        console.log(`Até o momento foram inseridos ${totalDataInserted} novos registros`)

        countPage = countPage - 1
        console.log(`Faltam ${countPage} páginas para finalizar a rotina`)

        if (countPage > 0) {
            helpers.setMyTimeout(3000)
            dataset = await requests.fetchDataAPI(dataset['nextUrl'], false)
        }
    }
}

async function main() {
    console.log('Iniciando a rotina Caso')
    totalDataInserted = 0
    countPage = 0

    // const countDataCasoTable = await db.checkIfDbIsPopulated()
    const countDataCasoTable = 1
    const isLast = countDataCasoTable > 0 ? true : false
    const URL = countDataCasoTable > 0 ? endpoint_caso_islast : endpoint_caso

    let responseAPI = await requests.fetchDataAPI(URL, true)

    if (isLast) {
        const dateFirstResult = responseAPI
        const countDataCasoTableByDate = await db.searchIfDataExistsByDate(dateFirstResult)

        if (countDataCasoTableByDate > 0) {
            console.log('Não é necessário novas ações no banco de dados')
        } else {
            await db.updateOldDataInDb()
            responseAPI = await requests.fetchDataAPI(URL, false)
            countPage = responseAPI['count']
            await fetchDataAddDB(responseAPI)
        }
    } else {
        responseAPI = await requests.fetchDataAPI(URL, false)
        await fetchDataAddDB(responseAPI)
    }

    if (totalDataInserted > 0) {
        console.log(`Ao total foram inseridos ${totalDataInserted} novos registros`)
    }

    console.log('Finalizando a rotina Caso')
}

module.exports = { main }