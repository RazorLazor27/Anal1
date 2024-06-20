const express = require('express')
const Paciente = require('../models/PacienteModel')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: "GET ALL LOGINS"})
})


//Obtener 1 login al peo

router.get('/:id', (req,res) => {
    res.json({mssg: "Obtenemos los datos del ql"})
})

// Añadir a un pacientes
router.post('/', async (req, res) => {
    const {nombre, rut, fecha_nacimiento, sexo, telefono } = req.body
    try {
        const paciente = await Paciente.create({nombre, rut, fecha_nacimiento, sexo, telefono})
        res.status(200).json(paciente)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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