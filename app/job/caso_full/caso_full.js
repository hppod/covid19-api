const db = require('./db_caso_full')
const helpers = require('./../../helpers/helpers')
const requests = require('./../../functions/fetch-api')
const logger = require('./../../log/log')
const { endpoint_casofull } = require('./../endpoints.consts')

let totalDataInserted, countPage

const fetchDataAddDB = async (dataset, timeout = 5000) => {
    while (countPage > 0) {
        const dataInserted = await db.insertDataInDb(dataset['data'])

        logger.log('CSF', 'C', dataInserted)
        totalDataInserted = totalDataInserted + dataInserted
        console.log(`Até o momento foram inseridos ${totalDataInserted} novos registros`)

        countPage = countPage - 1
        console.log(`Faltam ${countPage} páginas para finalizar a rotina`)

        if (countPage > 0) {
            helpers.setMyTimeout(timeout)
            dataset = await requests.fetchDataAPI(dataset['nextUrl'], false, true)
        }
    }
}

async function job() {
    logger.log('CSF', 'G')
    console.log('Iniciando a rotina CasoFull')
    totalDataInserted = 0
    countPage = 0

    let responseAPI = await requests.fetchDataAPI(endpoint_casofull, true, false, 1)

    const countDataCasoFullTableByDate = await db.searchIfDataExistsByDate(responseAPI)

    if (countDataCasoFullTableByDate > 0) {
        logger.log('CSF', 'C')
        console.log('Não é necessário novas ações no banco de dados')
    } else {
        await db.updateOldDataInDb()
        responseAPI = await requests.fetchDataAPI(endpoint_casofull, false, false)
        countPage = responseAPI['count']
        await fetchDataAddDB(responseAPI)
    }

    if (totalDataInserted > 0) {
        logger.log('CSF', 'CT', totalDataInserted)
        console.log(`Ao total foram inseridos ${totalDataInserted} novos registros`)
    }

    console.log('Finalizando a rotina CasoFull')
}

module.exports = { job }