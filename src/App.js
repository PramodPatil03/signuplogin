import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
        <HashRouter>
            <Routes>
                <Route exact path = '/' element = { <Login />} />
                <Route exact path = '/signup' element = { <Signup />} />
            </Routes>
        </HashRouter>  
  )
}

export default App
