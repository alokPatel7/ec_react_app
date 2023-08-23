import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <>
            <nav className="fixed-nav-bar">
                <span className="brand">Brand Name</span>
                <div className="link avatar">
                    <img src="https://lh3.googleusercontent.com/a/AAcHTtcjph8n3fWSPFQxSHPFJ_Fbx_dXHnUszAzRCVlOAlTVhg=s40-p-mo" alt="User Avatar" className="avatar-image" />
                    <span className="avatar-name">Alok Patel</span>
                </div>
            </nav>
        </>
    )
}
