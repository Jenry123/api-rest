const db = require('../dataBase/base.js');
const authenticateJWT=require('./token/authMiddleware')
// Obtener todos los servicios
exports.getAllMateria =[authenticateJWT, (req, res) => {
  db.query('SELECT * FROM MateriaPrima', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener los servicios');
      throw err;
    }
    res.json(result);
  });
}];

// Agregar un nuevo servicio
exports.addMateria = [authenticateJWT,(req, res) => {
  const newService = req.body;
  db.query('INSERT INTO MateriaPrima (id_materia_prima, nombre, descripcion, cantidad, unidad) VALUES ( ?, ?, ?, ?,?)',
    [newService.id_materia_prima,newService.nombre,newService.descripcion,newService.cantidad,newService.unidad],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al agregar un nuevo servicio');
        throw err;
      }
      res.status(201).send('Nuevo servicio agregado correctamente');
    });
}];

// Actualizar un servicio existente
exports.updateService = [authenticateJWT,(req, res) => {
  const materiaId = req.params.id;
  const updatedmateria = req.body;
  db.query('UPDATE MateriaPrima SET ? WHERE id_materia_prima = ?', [updatedmateria, materiaId], (err, result) => {
    if (err) {
      res.status(500).send('Error al actualizar el servicio');
      throw err;
    }
    res.send('Servicio actualizado correctamente');
  });
}];

// Eliminar un servicio
exports.deleteService =[authenticateJWT, (req, res) => {
  const materiaId = req.params.id;
  db.query('DELETE FROM MateriaPrima WHERE id_materia_Prima = ?', materiaId, (err, result) => {
    if (err) {
      res.status(500).send('Error al eliminar el servicio');
      throw err;
    }
    res.send('Servicio eliminado correctamente');
  });
}];
