import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ListaUsuarios = () => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/usuarios/").then(res => {
            setLista(res.data)
        })
    }, [lista])

    console.log(lista)
    return (
    <div className='row'>
        {
            lista.map(list => (
                <div className='col-md-4 p-2' key={list._id}>
                    <div className='card-header'>
                        <h5>Usuario {list._id}</h5>
                    </div>

                    <div className='card-body'>
                        <p>Nombre: {list.nombre} {list.apellido}</p>
                        <p>edad: {list.edad}</p>
                        <p>Correo Electronico: {list.correo}</p>
                    </div>

                    <div className='card-footer'>
                        <button className='btn btn-danger'>Eliminar</button>
                        <button className='btn btn-warning'>Modificar</button>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default ListaUsuarios;