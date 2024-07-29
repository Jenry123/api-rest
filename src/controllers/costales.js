const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware');

// Agregar una nueva materia prima
exports.addCostales = [authenticateJWT, (req, res) => {
  const { id_materia_prima, cantidad } = req.body;
  db.query('INSERT INTO  Costales( id_materia_prima,cantidad) VALUES (?,?)',
    [id_materia_prima,cantidad],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al agregar un costal');
      return err;
      }
      res.status(201).send('Nueva materia prima agregada correctamente');
    });
}];