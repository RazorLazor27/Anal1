const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: "GET ALL LOGINS"})
})


//Obtener 1 login al peo

router.get('/:id', (req,res) => {
    res.json({mssg: "Obtenemos los datos del ql"})
})

// Añadir a un pacientes
router.post('/', (req, res) => {
    res.json({mssg: "ANADIR A ALGUIEN A LA BD"})
})

// Borrar un paciente
router.delete('/', (req,res) => {
    res.json({mssg: "Paciente eliminado"})
})

// Actualizar a un paciente
router.patch('/', (req, res) => {
    res.json({mssg: "Paciente actualizado"})
})

module.exports = router