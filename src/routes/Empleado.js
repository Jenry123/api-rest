const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/Empleado');

// Rutas para los endpoints CRUD de Empleado
router.post('/', empleadoController.addEmpleado);
router.get('/', empleadoController.getAllEmpleados);
router.put('/:id', empleadoController.updateEmpleado);
router.delete('/:id', empleadoController.deleteEmpleado);

module.exports = router;
