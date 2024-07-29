const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware');


exports.getAllPiezas = [authenticateJWT, (req, res) => {
  db.query('SELECT * FROM PiezasMaquinaria', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener las piezas');
      return err;
    }
    res.json(result);
  });
}];

exports.addPiezas = [authenticateJWT, (req, res) => {
  const { id_maquinaria,nombre,descripcion,cantidad} = req.body;
  db.query('INSERT INTO PiezasMaquinaria (id_maquinaria, nombre, descripcion, cantidad) VALUES (?, ?, ?, ?)',
    [id_maquinaria, nombre, descripcion, cantidad],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al agregar una nueva pieza');
        throw err;
      }
      res.status(201).send('Nueva pieza agregada correctamente');
    });
}];

exports.updatePiezas = [authenticateJWT, (req, res) => {
  const materiaId = req.params.id;
  const updatedMateria = req.body;
  db.query('UPDATE PiezasMaquinaria SET ? WHERE id_piezas= ?',
    [updatedMateria, materiaId],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al actualizar la pieza');
        throw err;
      }
      res.send('Materia prima actualizada correctamente');
    });
}];

exports.deleteService = [authenticateJWT, (req, res) => {
  const materiaId = req.params.id;
  db.query('DELETE FROM PiezasMaquinaria SET ? WHERE id_piezas= ?', [materiaId], (err, result) => {
    if (err) {
      res.status(500).send('Error al eliminar la pieza');
      throw err;
    }
    res.send('Materia prima eliminada correctamente');
  });
}];
