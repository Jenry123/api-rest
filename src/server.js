
const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();//es par a poder usar los metodos del servidor
const port = process.env.port||3000;
const bodyParser = require('body-parser');
//puerto en el que se ejecuta el servidor

// Configurar CORS
app.use(cors());
//nos permite comunicarnos entre distintos puertos sin restricciones  

app.use(bodyParser.json());//sirve para realizar solicitudes tipo json al servidor

// Importar rutas

//sirven para llamar los recursos de las rutas de las tablas(entidades)
const usuariosRoutes = require('./routes/usuario');
const proveedoresRoutes = require('./routes/proveedor');
const serviciosRoutes = require('./routes/Servicios');
const maquinariaRoutes = require('./routes/piezas.js');
const inventarioRoutes = require('./routes/inventarioRoutes');
const materiaPrima = require('./routes/MateriaPrima');
const ventaRotes = require('./routes/Ventas');
const ofreceRoutes=require('./routes/ofrece.routes')
const corteControllers=require('./routes/corte.routes.js')
const diasLaboradosController=require('./routes/DiasLaborados.js')
const costalesController=require('./routes/costales.js')
const mantemientoController=require('./routes/Mantenimiento.js')


const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync("/home/jenryeduardo/Descargas/api.pem")
  };
// Usar rutas o uris
//son direcciones que nos llevan hacia los metodos de una entidad esto
// es una uri (/api)
app.use('/api/corte',corteControllers);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/servicios', serviciosRoutes);
app.use('/api/materiaPrima', materiaPrima);
app.use('/api/PiezasMaquinaria', maquinariaRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/misServicios',ofreceRoutes);
app.use('/api/ventas', ventaRotes);
app.use('/api/diasLaborados',diasLaboradosController);
app.use('/api/costales',costalesController);
app.use('/api/mantenimiento',mantemientoController);

// Iniciar servidor
//que el serividor siempre este activo
//en que puerto se esta ejecutando
https.createServer(options, app).listen(3000, () => {
  console.log('Servidor HTTPS corriendo en el puerto 3000');
  });