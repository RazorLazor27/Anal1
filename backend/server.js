const express = require('express')
require('dotenv').config()


// Crea la app express
const app = express()

//MiddleWare
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Rutas de la API
app.get('/', (req, res) => {
    res.json({mssg: "Bienvenido a la App"});
})

// Escuchando llamadas
app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto 4000");
})

process.env
