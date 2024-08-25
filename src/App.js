import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path = '/' element = { <Login />} />
                <Route exact path = '/signup' element = { <Signup />} />
            </Routes>
        </BrowserRouter>  
  )
}

export default App
