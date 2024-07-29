const mysql = require('mysql2');//usar mysql que es el motor de una BD
require('dotenv').config();

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "admin.cwwebdorxcak.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "233431amilcareduardo",
  database: "tortilleria_2"
});//todo esto crea la conexión a la base de datos

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});
//comprueba que la base de datos se conecto exitosamente
module.exports = db;
