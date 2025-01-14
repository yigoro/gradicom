const dbConnection = require('./db');

// Ahora puedes usar `dbConnection` para interactuar con la base de datos
dbConnection.query('SELECT * FROM tu_tabla', (err, results) => {
  if (err) {
    console.error('Error ejecutando la consulta:', err.message);
    return;
  }
  console.log('Resultados de la consulta:', results);


// Cerrar la conexión
dbConnection.end();
});
