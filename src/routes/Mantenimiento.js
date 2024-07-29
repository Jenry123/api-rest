const express = require('express');
const router = express.Router();
const mantemientoController = require('../controllers//Mantenimiento.js');

// Rutas para los endpoints CRUD de Días Laborados
router.post('/', mantemientoController.addMantenimiento);
router.get('/', mantemientoController.getAllMantenimientos);


module.exports = router;
    