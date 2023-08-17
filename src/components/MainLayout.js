import React from 'react'
import Sidebar from './common/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '../router/app.routing';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
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
