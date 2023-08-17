import React from 'react'
import './Sidebar.css'

export default function Sidebar({ children }) {
    const toggleSidebar = () => {
        var getSidebar = document.querySelector('nav');
        getSidebar.classList.toggle('active');
    };

    return (
        <>
            <header>
                <div className="toggle">
                    <i className="fas fa-bars" />
                </div>
                <h3>Dashboard</h3>
                <a href="#">
                    <i className="fas fa-sign-out-alt" />
                </a>
            </header>
            <nav>
                <ul>
                    <li onClick={toggleSidebar}>
                        <a className="toggle">
                            <span className="icon">
                                <i className="fas fa-bars" />
                            </span>
                            <span className="title">Menu</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-home" />
                            </span>
                            <span className="title">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-user" />
                            </span>
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-envelope" />
                            </span>
                            <span className="title">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-info" />
                            </span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-cog" />
                            </span>
                            <span className="title">Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-lock" />
                            </span>
                            <span className="title">Password</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <i className="fas fa-sign-out-alt" />
                            </span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

