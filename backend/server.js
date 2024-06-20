const express = require('express')
require('dotenv').config()

// Conexion a la base de datos 
const mongoose = require('mongoose')


const loginRoutes = require('./routes/workouts')


// Crea la app express
const app = express()

// MiddleWare
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


app.use('/api/workouts',loginRoutes)

// Conectarse a la BD 
mongoose.connect(process.env.MONGO_URI)
    .then(( ) => {
        app.listen(process.env.PORT, () => {
            console.log("Escuchando en el puerto 4000");
        })
    })
    .catch((error) => {
        console.log(error)
    })

// Escuchando llamadas

