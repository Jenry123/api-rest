const db = require('../dataBase/base.js');
const authenticateJWT = require('./token/authMiddleware.js');

exports.addAllCortes = [authenticateJWT, (req, res) => {
    const newCorte = req.body;

    db.query('INSERT INTO CorteCaja (monto_inicial, monto_final, total) VALUES (?, ?, ?)', 
    [newCorte.monto_inicial, newCorte.monto_final, newCorte.total], (err, result) => {
        if (err) {
            res.status(500).json({ error: "Error al agregar un corte de caja" });
            return;
        }

        res.status(200).json({ message: "Corte de caja realizado" });
    });
}];

exports.getAllCortes = [authenticateJWT, (req, res) => {
    db.query('SELECT * FROM CorteCaja', (err, result) => {
        if (err) {
            res.status(500).json({ error: "Error al obtener los cortes de caja" });
            return;
        }

        res.json(result);
    });
}];
