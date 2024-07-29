const express = require('express');
const router = express.Router();// usar los metodos del servidor conocidos como
//metodos http los cuales son get post put y delete
const maquinariaController = require('../controllers/PiezasMaqui');
// acceder o llamar a los metodos CRUD que se creo en el controlador
// CRUD (crear, leer, actualizar y eliminar)


// Rutas para los endpoints CRUD de Maquinaria

//usar el metodo final o funcion de una entidad de la uri 
router.get('/verMaquinar', maquinariaController.getAllPiezas);//mostrar los datos y obtener los datos
router.post('/agregar', maquinariaController.addPiezas);//mandar datos 
router.put('/:id', maquinariaController.updatePiezas);//actualizar datos de una base datos
router.delete('/:id', maquinariaController.deleteService);//eliminar datos de una BD

//exporta las rutas al servidor para poder usarlas
module.exports = router;