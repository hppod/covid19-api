const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const downloadCasoData = require('./app/job/caso/caso')
const downloadCasoFullData = require('./app/job/caso_full/caso_full')

app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send('API works')
})

app.get('/test', (req, res) => {
    console.log('Test requested')
    // downloadCasoData.main().then(data => res.send(data)).catch(error => res.send(error))
    downloadCasoFullData.main().then(data => res.send(data)).catch(error => res.send(error))
})

app.listen(PORT, () => {
    console.log(`API listen on PORT ${PORT}`)
})