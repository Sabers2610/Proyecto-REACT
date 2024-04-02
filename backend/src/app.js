const express = require('express');
const cors = require('cors');
const app = express(); 
const usuarioCtrl = require("./controller/usuario.controller");

// configuracion
app.set("port", process.env.PORT || 3001);

// middlewares
app.use(cors())
app.use(express.json())

// rutas
app.get("/", (req, res) =>{
    res.send("Bienvenido a restfull");
})

// ruta de peticiones para la API de usuarios

app.use("/api/usuarios", require("./routes/usuario"));

module.exports = app;