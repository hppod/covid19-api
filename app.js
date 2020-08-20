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
    reqGoogle.main()
})

app.listen(PORT, () => console.log(`API listen on PORT ${PORT}`))