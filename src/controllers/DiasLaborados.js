const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware');

// Obtener toda la materia prima
exports.getAllDiasLab = [authenticateJWT, (req, res) => {
  const query = `
    SELECT DiasLaborados.*, Usuarios.nombre, Usuarios.apellidos
    FROM DiasLaborados
    JOIN Usuarios ON DiasLaborados.id_usuario = Usuarios.id_Usuario
    WHERE Usuarios.id_rol = 2
  `;
  
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener los días laborados:', err); // Añadir log de error
      return res.status(500).send('Error al obtener los días laborados');
    }
    res.json(result);
  });
}];

// Agregar una nueva materia prima
exports.addDias = [authenticateJWT, (req, res) => {
  const { id_usuario, fecha, horasTrabajadas } = req.body;
  
  if (!id_usuario || !fecha || !horasTrabajadas) {
    return res.status(400).send('Todos los campos son requeridos');
  }

  db.query('INSERT INTO DiasLaborados (id_usuario, fecha, horasTrabajadas) VALUES (?, ?, ?)',
    [id_usuario, fecha, horasTrabajadas],
    (err, result) => {
      if (err) {
        console.error('Error al agregar el día laborado:', err); // Añadir log de error
        return res.status(500).send('Error al agregar el día laborado'); // Añadir return para asegurar que solo se envía una respuesta
      }
      res.status(201).send('Nuevo día laborado');
    });
}];