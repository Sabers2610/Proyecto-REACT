import React from 'react'
import {Link} from 'react-router-dom'

const Navegacion = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Usuarios
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/crearUsuario">
                                Crear usuario
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navegacion