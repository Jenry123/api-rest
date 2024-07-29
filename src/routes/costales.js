const express = require('express');
const router = express.Router();
const costalesController = require('../controllers/costales');

// Rutas para los endpoints CRUD de Días Laborados
router.post('/', costalesController.addCostales);



module.exports = router;
    