const express = require('express')
const Paciente = require('../models/PacienteModel')
const {
    getPaciente,
    getPacientes,
    crearPaciente,
    borrarPaciente
} = require('../controllers/pacienteController')

const router = express.Router();


// Obtener todos los Pacientes
router.get('/', getPacientes) //FUNCIONA


// Obtener 1 Paciente

router.get('/:id', getPaciente) //por arreglar

// Añadir a un pacientes
router.post('/', crearPaciente) //Por arreglar

// Borrar un paciente
router.delete('/:id', borrarPaciente) //FUNCIONA

// Actualizar a un paciente
router.patch('/', (req, res) => {
    res.json({mssg: "Paciente actualizado"})
})

module.exports = router