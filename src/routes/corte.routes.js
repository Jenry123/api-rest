const express = require('express');
const router = express.Router();
const corteC = require('../controllers/CorteCaja');

// Rutas para los endpoints CRUD de Empleado
router.post('/',corteC.addAllCortes)
router.get('/',corteC.getAllCortes)
module.exports = router;
