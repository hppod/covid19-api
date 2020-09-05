const fetch = require("node-fetch");
const db = require('./db_caso')
const helpers = require('./../../helpers/helpers')
const { endpoint_caso, endpoint_caso_islast } = require('../endpoints.consts')

let request, response
const casoContent = new Array()

const fetchDataFromBrasilIoAPI = async (URL, limited) => {
    console.log(`Requisitando dados: ${URL}`)

    try {
        request = await fetch(URL).catch(e => console.log(e))
        response = await request.json()

        if (response['results'] != undefined) {
            response['results'].forEach(caso => casoContent.push(caso))
        } else {
            const seconds = response['available_in'].charAt(0) * 1000
            helpers.setMyTimeout(seconds)
            await fetchDataFromBrasilIoAPI(URL)
        }

        if (!limited) {
            if (response['next']) {
                let newURLRequest = response['next']
                console.log(`${casoContent.length} dados coletados até o momento`)
                helpers.setMyTimeout(5000)
                await fetchDataFromBrasilIoAPI(newURLRequest)
            }
        }

        return casoContent
    } catch (e) {
        console.log(e)
    }

}

async function main() {
    console.log('Iniciando a entidade Caso')

    const countDataCasoTable = await db.checkIfDbIsPopulated()
    const isLast = countDataCasoTable > 0 ? true : false
    const URL = countDataCasoTable > 0 ? endpoint_caso_islast : endpoint_caso

    let responseCovidBrIoAPI = await fetchDataFromBrasilIoAPI(URL, true)

    if (isLast) {
        const dateFirstResult = responseCovidBrIoAPI[0]['date']
        const countDataCasoTableByDate = await db.searchIfDataExistsByDate(dateFirstResult)

        if (countDataCasoTableByDate > 0) {
            console.log('Não é necessário novas ações no banco de dados')
        } else {
            await db.updateOldDataInDb()
            casoContent.splice(0, casoContent.length)
            responseCovidBrIoAPI = await fetchDataFromBrasilIoAPI(URL, false)
            const dataInserted = await db.insertDataInDb(responseCovidBrIoAPI)
            console.log(`${dataInserted} novos registros foram inseridos no banco de dados`)
            casoContent.splice(0, casoContent.length)
        }
    } else {
        casoContent.splice(0, casoContent.length)
        responseCovidBrIoAPI = await fetchDataFromBrasilIoAPI(URL, false)
        const dataInserted = await db.insertDataInDb(responseCovidBrIoAPI)
        console.log(`${dataInserted} novos registros foram inseridos no banco de dados`)
        casoContent.splice(0, casoContent.length)
    }

    console.log('Finalizando a entidade Caso')
}

module.exports = { main }