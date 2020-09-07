const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const CronJob = require('cron').CronJob
const Caso = require('./app/job/caso/caso')
const CasoFull = require('./app/job/caso_full/caso_full')

new CronJob('0 * * * *', async function () {
    const resultCaso = await Caso.job()

    if (resultCaso) {
        await CasoFull.job()
    }
}, null, true, 'America/Sao_Paulo').start()

app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send('API works')
})

app.listen(PORT, () => {
    console.log(`API listen on PORT ${PORT}`)
})