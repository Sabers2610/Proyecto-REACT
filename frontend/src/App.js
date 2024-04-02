import './App.css';
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Navegacion from './components/Navegacion'
import CrearUsuario from './components/CrearUsuario'
import ListaUsuarios from './components/ListaUsuarios'

const App = () => {
  return (
    <div className=''>
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>}/>
          <Route path='/crearUsuario' element={<CrearUsuario/>}/>
          <Route path='/edit/:id' element={<CrearUsuario/>}/> 
        </Routes>
      </div>
    </div>
  )
}

export default App;

