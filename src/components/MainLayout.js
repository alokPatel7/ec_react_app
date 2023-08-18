import React, { useState } from 'react'
import Sidebar from './common/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '../router/app.routing';

export default function MainLayout() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="main-layout">
      {isUserLoggedIn && <Sidebar />}
      <div className="page-content">
        <Router>
          <Routes>
            {routes.map((r, index) => {
              return <Route key={index} path={r.path} element={r.component} />
            })}
          </Routes>
        </Router>
      </div>
    </div>
  )
}
