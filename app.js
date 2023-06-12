const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose
    .connect(
        `mongodb+srv://jhonatansh17:${process.env.MONGO_DB_PASS}@development.almoc67.mongodb.net/stock-app?retryWrites=true&w=majority`
    )
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Servidor escuchando em el puerto ${PORT}`)
        })
        console.log('Conexion exitosa a la BBDD')
    })
    .catch((error) => console.log(error))

const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        price: Number,
    },
    { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

//Usamos Middleware
app.use(express.json())

app.post('/api/v1/products', (req, res) => {
    const newProduct = new Product(req.body)

    newProduct
        .save()
        .then((result) => {
        res.status(201).json({ ok:true })
    })
    .catch((error) => console.log(err))
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT