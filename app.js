const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

//app.get('/', (req, res) => {
//    console.log('Peticion recibida')
//    res.status(200).sendFile('index.html')
//})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor escuchando em el puerto ${PORT}`)
})