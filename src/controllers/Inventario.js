const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware');

// Obtener todo el inventario
exports.obtenerTodoElInventario = [authenticateJWT,(req, res) => {
  db.query('SELECT Maquinaria.*, MateriaPrima.* FROM Inventario JOIN Maquinaria ON Inventario.id_maquinaria = Maquinaria.id_maquinaria JOIN MateriaPrima ON Inventario.id_materia_prima = MateriaPrima.id_materia_prima', (err, result) => {
    if (err) {
      console.error('Error al obtener el inventario:', err); // Log the error details
      res.status(500).json({ error: 'Error al obtener el inventario' });
      return; // Añadido return para evitar múltiples respuestas
    }
    res.json(result);
  });
}];

