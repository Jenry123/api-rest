const express = require('express');
const router = express.Router();
const materiaPrimaController = require('../controllers/materiaPrima');

// Rutas para los endpoints de MateriaPrima
router.post('/', materiaPrimaController.addMateria);
router.post('/agregar', materiaPrimaController.getAllMateria);
router.put('/:id', materiaPrimaController.updateService);
router.delete('/:id', materiaPrimaController.deleteService);

module.exports = router;
