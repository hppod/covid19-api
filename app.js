const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const reqGoogle = require('./app/job/request')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('API works')
})

app.get('/test', (req, res) => {
    console.log('Test requested')
    reqGoogle.makeRequest_Caso((result, error) => {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(result)
        }
    })
})

app.listen(PORT, () => console.log(`API listen on PORT ${PORT}`))