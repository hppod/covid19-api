const csv = require('csv-parser')
const fs = require('fs')
const db_caso = require('./../caso/db_caso')
const db_casofull = require('./../caso_full/db_caso_full')
const results = new Array()

let counter = 0

fs.createReadStream('./CSV/caso_full.csv')
    .pipe(csv())
    .on('data', (data) => {
        counter = counter + 1
        console.log(`Lendo registro ${counter} do CSV`)
        results.push(data)
    })
    .on('end', () => {
        main()
    })

async function main() {
    // const resultDB = await db_caso.insertDataInDb(results)
    const resultDB = await db_casofull.insertDataInDb(results)
    if (resultDB > 0) {
        console.log(`Foram inseridos ${resultDB} registros no banco de dados`)
    }
}