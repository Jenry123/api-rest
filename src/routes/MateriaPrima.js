const express = require('express');
const router = express.Router();
const materiaPrimaController = require('../controllers/materiaPrima');

// Rutas para los endpoints de MateriaPrima
router.get('/', materiaPrimaController.getAllMateria);
router.post('/agregar', materiaPrimaController.addMateria);
router.put('/:id', materiaPrimaController.updateService);
router.delete('/:id', materiaPrimaController.deleteService);

module.exports = router;
