const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Peticion recibida')
    res.status(200).send('Comenzamos........')
})

app.listen(4000, () => {
    console.log('Servidor escuchando em el puerto 4000')
})