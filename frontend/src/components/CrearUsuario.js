import React, { useState } from "react";
import axios from 'axios'

const CrearUsuario = () => {
    const datosBase = {
        nombre: "",
        apellido: "",
        edad: "",
        correo: "",
    };

    const [usuario, setUsuario] = useState(datosBase);

    const capturarDatos = (event) => {
        const { name, value } = event.target;
        setUsuario({...usuario, [name]: value});
    };

    const guardarDatos = async (event) => {
        event.preventDefault()
        const newUsuario = {
            nombre:usuario.nombre,
            apellido:usuario.apellido,
            edad:usuario.edad,
            correo:usuario.correo
        }

        axios.post("http://localhost:3001/api/usuarios/", newUsuario)
        setUsuario({...datosBase})
    }

    return (
        <div className="col-md-6 offset-md-3">
        <div className="card card-body">
            <form onSubmit={guardarDatos}>
            <h2 className="text-center mb-3">Registrar usuario</h2>
            <div className="mb-3">
                <label>Nombre:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                required
                value={usuario.nombre}
                name="nombre"
                onChange={capturarDatos}
                />
            </div>

            <div className="mb-3">
                <label>Apellido:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Ingrese su apellido"
                required
                value={usuario.apellido}
                name="apellido"
                onChange={capturarDatos}
                />
            </div>

            <div className="mb-3">
                <label>Edad:</label>
                <input
                type="number"
                className="form-control"
                placeholder="Ingrese su edad"
                required
                value={usuario.edad}
                name="edad"
                onChange={capturarDatos}
                />
            </div>

            <div className="mb-4">
                <label>correo electronico:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Ingrese su correo electronico"
                required
                value={usuario.correo}
                name="correo"
                onChange={capturarDatos}
                />
            </div>

            <button type="submit" className="btn btn-primary form-control">
                Guardar Datos
            </button>
            </form>
        </div>
        </div>
    );
};

export default CrearUsuario;
