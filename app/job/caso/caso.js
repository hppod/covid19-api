const request = require('request')
const { endpoint_caso, endpoint_caso_islast } = require('../endpoints.consts')
const db = require('./db_caso')

const Object = [{
    "city": null,
    "city_ibge_code": "12",
    "confirmed": 23146,
    "confirmed_per_100k_inhabitants": 2624.45645,
    "date": "2020-08-19",
    "death_rate": 0.0255,
    "deaths": 591,
    "estimated_population_2019": 881935,
    "is_last": true,
    "order_for_place": 156,
    "place_type": "state",
    "state": "AC"
}]

async function main() {
    const countDb = await db.checkIfDbIsPopulated()
    console.log(countDb)

    const insertedDb = await db.insertDataInDb(Object)
    console.log(insertedDb)

    const updatedDb = await db.updateOldDataInDb()
    console.log(updatedDb)
}

module.exports = { main }