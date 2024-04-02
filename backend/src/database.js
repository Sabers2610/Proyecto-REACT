const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017/test';

// Conecta a la base de datos MongoDB
mongoose.connect(URI);

const connection = mongoose.connection;

// Maneja el evento 'open' que indica que la conexión se ha establecido correctamente
connection.once('open', () => {
    console.log(`Conexión a la base de datos establecida: ${URI}`);
    require("./models/Usuario");
});

// Maneja el evento 'error' en caso de que haya un problema con la conexión
connection.on('error', (err) => {
    console.error('Error de conexión a la base de datos:', err);
});


