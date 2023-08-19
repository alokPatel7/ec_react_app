import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from '../views/authentication/AuthenticationWrapper'
import SignIn from '../views/authentication/SignIn'

export default function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={1} path='/' element={<AuthenticationWrapper />} />
        <Route key={2} path='/account' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
