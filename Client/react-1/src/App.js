import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './SignUp'
import Login from './Login'

const App = () => {
  return (
    <div>

      <Routes>

        <Route  path='/' element={<Signup/>}  />
        <Route  path='/login' element={<Login/>}  />




      </Routes>



    </div>
  )
}

export default App