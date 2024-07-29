const express = require('express');
const router = express.Router();
const diasLaboradosController = require('../controllers/DiasLaborados.js');

// Rutas para los endpoints CRUD de Días Laborados
router.post('/', diasLaboradosController.addDias);
router.get('/', diasLaboradosController.getAllDiasLab);


module.exports = router;
    