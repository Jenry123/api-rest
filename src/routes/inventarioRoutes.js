const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/Inventario');

// Rutas para los endpoints CRUD de Inventario
router.get('/', inventarioController.obtenerTodoElInventario);

module.exports = router;
