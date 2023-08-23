import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

export default function ScreenWrapper() {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}
