const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const downloadCasoData = require('./app/job/caso/caso')
const downloadCasoFullData = require('./app/job/caso_full/caso_full')
const logger = require('./app/log/log')

app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send('API works')
})

app.get('/test', (req, res) => {
    console.log('Test requested')

    logger.log('CS', 'G').then(() => res.send('ok')).catch(() => res.send('not ok'))

    // downloadCasoData.main().then(data => res.send(data)).catch(error => res.send(error))
    // downloadCasoFullData.main().then(data => res.send(data)).catch(error => res.send(error))
})

app.listen(PORT, () => {
    console.log(`API listen on PORT ${PORT}`)
})