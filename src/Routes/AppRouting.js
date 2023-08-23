import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from '../views/authentication/AuthenticationWrapper'
import SignIn from '../views/authentication/SignIn'
import { getRoutingArrayByRole } from './RoutingConfig'
import ScreenWrapper from '../shared/layouts/wrapper/wrapper'
import SellerDashboard from '../views/seller/SellerDashboard/SellerDashboard'

export default function AppRouting() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [userRole, SetUserRole] = useState('seller');
  const [activeRouting, setActiveRouting] = useState([]);

  useEffect(() => {
    const getActiveRouting = async () => {
      const routing = await getRoutingArrayByRole(userRole);
      setActiveRouting(routing);
      setUserLoggedIn(true);
    }
    getActiveRouting()
  }, [isUserLoggedIn, userRole]);

  return (
    <div className="main">

      <BrowserRouter>
        <Routes>
          <Route key={1} path='/' element={<AuthenticationWrapper />} />
          <Route key={2} path='/account' element={<SignIn />} />
          <Route key={3} element={<ScreenWrapper />}>
            {isUserLoggedIn && activeRouting.map((route, index) => {
              return <Route key={index} path={route.path} element={route.component} />
            })}
            {/* <Route key={4} path='/dashboard' element={<SellerDashboard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </div>
  )
}



