const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware');

// Obtener toda la materia prima
exports.getAllMateria = [authenticateJWT, (req, res) => {
  db.query('SELECT * FROM MateriaPrima', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener la materia prima');
      return err;
    }
    res.json(result);
  });
}];

// Agregar una nueva materia prima
exports.addMateria = [authenticateJWT, (req, res) => {
  const { nombre, descripcion, unidades } = req.body;
  db.query('INSERT INTO MateriaPrima ( nombre, unidades,descripcion) VALUES (?, ?, ?)',
    [nombre, unidades, descripcion],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al agregar una nueva materia prima');
      return err;
      }
      res.status(201).send('Nueva materia prima agregada correctamente');
    });
}];

// Actualizar una materia prima existente
exports.updateService = [authenticateJWT, (req, res) => {
  const materiaId = req.params.id;
  const updatedMateria = req.body;
  db.query('UPDATE MateriaPrima SET ? WHERE id_materia_prima = ?',
    [updatedMateria, materiaId],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al actualizar la materia prima');
        throw err;
      }
      res.send('Materia prima actualizada correctamente');
    });
}];

// Eliminar una materia prima
exports.deleteService = [authenticateJWT, (req, res) => {
  const materiaId = req.params.id;
  db.query('DELETE FROM MateriaPrima WHERE id_materia_prima = ?', [materiaId], (err, result) => {
    if (err) {
      res.status(500).send('Error al eliminar la materia prima');
      throw err;
    }
    res.send('Materia prima eliminada correctamente');
  });
}];
