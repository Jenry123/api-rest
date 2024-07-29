const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware');

// Obtener toda la materia prima
exports.getAllMantenimientos = [authenticateJWT, (req, res) => {
  const query = `
  select * from Mantenimiento
  `;
  
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener la lista de mantenimientos:', err); // Añadir log de error
      return res.status(500).send('Error al obtener los días laborados');
    }
    res.json(result);
  });
}];

// Agregar una nueva materia prima
exports.addMantenimiento = [authenticateJWT, (req, res) => {
  const { id_maquinaria,tipo_mantenimiento,fecha,costo,estado_pago } = req.body;
  db.query('INSERT INTO Mantenimiento(id_maquinaria,tipo_mantenimiento,fecha,costo,estado_pago ) VALUES (?,?, ?, ?, ?)',
    [id_maquinaria,tipo_mantenimiento,fecha,costo,estado_pago ],
    (err, result) => {
      if (err) {
        console.error('Error al agregar el mantimiento:', err); // Añadir log de error
        return res.status(500).send('Error al agregar el mantenimiento'); // Añadir return para asegurar que solo se envía una respuesta
      }
      res.status(201).send('Nuevo mantenimiento agregado');
    });
}];
