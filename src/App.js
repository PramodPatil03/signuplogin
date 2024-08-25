import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
        <HashRouter>
            <Routes>
                <Route exact path = 'signuplogin/' element = { <Login />} />
                <Route exact path = 'signuplogin/signup' element = { <Signup />} />
            </Routes>
        </HashRouter>  
  )
}

export default App
