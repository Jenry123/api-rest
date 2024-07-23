const express = require('express');
const router = express.Router();
const diasLaboradosController = require('../controllers/DiasLaborados');

// Rutas para los endpoints CRUD de Días Laborados
router.post('/', diasLaboradosController.agregarDiaLaborado);
router.get('/', diasLaboradosController.obtenerTodosDiasLaborados);
router.put('/:id', diasLaboradosController.actualizarDiaLaborado);
router.delete('/:id', diasLaboradosController.eliminarDiaLaborado);

module.exports = router;
