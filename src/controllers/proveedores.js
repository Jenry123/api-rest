const db = require('../dataBase/base.js');
const authenticateJWT=require('./token/authMiddleware')
// Obtener todos los proveedores
exports.getAllSuppliers =[authenticateJWT, (req, res) => {
  db.query('SELECT * FROM Proveedor', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener los proveedores');
      throw err;
    }
    res.json(result);
  });
}];
// Agregar un nuevo proveedor
exports.addSupplier = [authenticateJWT,(req, res) => {
  const newSupplier = req.body;
  db.query('INSERT INTO Proveedor (id_proveedor, nombre, contacto, telfono, email) VALUES (?, ?, ?, ?, ?)',
    [newSupplier.id_proveedor, newSupplier.nombre, newSupplier.contacto, newSupplier.telfono, newSupplier.email],
    (err, result) => {
      if (err) {
        res.status(500).send('Error al agregar un nuevo proveedor');
        throw err;
      }
      res.status(201).send('Nuevo proveedor agregado correctamente');
    });
}];

// Actualizar un proveedor existente
exports.updateSupplier = [authenticateJWT,(req, res) => {
  const supplierId = req.params.id;
  const updatedSupplier = req.body;
  db.query('UPDATE Proveedor SET ? WHERE id_proveedor = ?', [updatedSupplier, supplierId], (err, result) => {
    if (err) {
      res.status(500).send('Error al actualizar el proveedor');
      throw err;
    }
    res.send('Proveedor actualizado correctamente');
  });
}];

// Eliminar un proveedor
exports.deleteSupplier = [authenticateJWT,(req, res) => {
  const supplierId = req.params.id;
  db.query('DELETE FROM Proveedor WHERE id_proveedor = ?', supplierId, (err, result) => {
    if (err) {
      res.status(500).send('Error al eliminar el proveedor');
      throw err;
    }
    res.send('Proveedor eliminado correctamente');
  });
}];
