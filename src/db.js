//contiene codigo de conexion a la base de datos
const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
  host: 'localhost',      // Dirección del servidor MySQL
  user: 'tu_usuario',     // Usuario de la base de datos
  password: 'tu_contraseña', // Contraseña del usuario
  database: 'tu_base_de_datos', // Nombre de la base de datos
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.message);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});


module.exports = connection;

