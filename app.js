const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const downloadCasoData = require('./app/job/caso/caso')

app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send('API works')
})

app.get('/test', (req, res) => {
    console.log('Test requested')
    downloadCasoData.main()
})

app.listen(PORT, () => console.log(`API listen on PORT ${PORT}`))