const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('API works')
})

app.listen(PORT, () => console.log(`API listen on PORT ${PORT}`))