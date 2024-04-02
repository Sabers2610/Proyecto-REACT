const Usuario = require("../models/Usuario");

Usuario.getUsu = async(req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

Usuario.createUsu = async(req, res) => {
    const {nombre, apellido, edad, correo} = req.body;
    const newUsu = new Usuario ({
        nombre:nombre,
        apellido:apellido,
        edad:edad,
        correo:correo
    });

    await newUsu.save();
    res.json({message: "Usuario creado exitosamente!"});
}

Usuario.findUsu = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

Usuario.deleteUsu = async(req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.json({message: "Usuario eliminado correctamente!"});
}

Usuario.updateUsu = async(req, res) => {
    const {nombre, apellido, edad, correo} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo
    });
    res.json({message: "Usuario actualizado correctamente!"});
}

module.exports = Usuario;