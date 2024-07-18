const db = require('../dataBase/base.js');
const authenticateJWT=require('./token/authMiddleware')
// Obtener todos los detalles de venta
exports.obtenerOfrece=[authenticateJWT, (req, res) => {
  db.query('SELECT Servicios.*, Proveedor.* FROM Ofrece JOIN Servicios ON Ofrece.id_servicios = Servicios.id_servicio JOIN Proveedor ON Ofrece.id_proveedor = Proveedor.id_proveedor', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener los detalles de venta');
      throw err;
    }
    res.json(result);
  });
}];

