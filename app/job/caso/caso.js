const fetch = require("node-fetch");
const db = require('./db_caso')
const { endpoint_caso, endpoint_caso_islast } = require('../endpoints.consts')

const fetchDataFromBrasilIoAPI = async URL => {
    const response = await fetch(URL)
    return await response.json()
}

async function main() {

    const countDataCasoTable = await db.checkIfDbIsPopulated()
    const isLast = countDataCasoTable > 0 ? true : false
    const URL = countDataCasoTable > 0 ? endpoint_caso_islast : endpoint_caso

    const responseCovidBrIoAPI = await fetchDataFromBrasilIoAPI(URL)

    if (isLast) {
        const dateFirstResult = responseCovidBrIoAPI['results'][0]['date']
        const countDataCasoTableByDate = await db.searchIfDataExistsByDate(dateFirstResult)

        if (countDataCasoTableByDate > 0) {
            console.log('Não é necessário novas ações no banco de dados')
        } else {
            await db.updateOldDataInDb()
            const dataInserted = await db.insertDataInDb(responseCovidBrIoAPI['results'])
            console.log(`${dataInserted} novos registros foram inseridos no banco de dados`)
        }
    }

}

module.exports = { main }