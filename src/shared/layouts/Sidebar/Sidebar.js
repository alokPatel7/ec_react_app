import React, { useState } from 'react';
import './Sidebar.css'; // Create a separate CSS file for your styles

function Sidebar() {
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    // const toggleSubMenu = (e) => {
    //     const subMenu = e.currentTarget.nextElementSibling;
    //     subMenu.style.display = 'block';
    //     //  classList.toggle('active');
    //     const dropdown = e.currentTarget.querySelector('.dropdown');
    //     dropdown.classList.toggle('rotate');
    // };

    const toggleSubMenu = (e) => {
        const subMenu = e.currentTarget.nextElementSibling;
        const dropdown = e.currentTarget.querySelector('.dropdown');

        // Toggle the 'active' class to show/hide the sub-menu
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
            dropdown.classList.remove('rotate');
        } else {
            subMenu.style.display = 'block';
            dropdown.classList.add('rotate');
        }
    };


    return (
        <div>
            {/* <div className={`menu-btn ${isSidebarActive ? 'hidden' : ''}`} onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div> */}

            <div className="side-bar active">
                <header>
                    <div className="close-btn" onClick={toggleSidebar}>
                        {/* <i className="fas fa-times"></i> */}
                    </div>
                    <img
                        src="https://lh3.googleusercontent.com/a-/AOh14Gj99VObFyE8W_h8RrcwZO_aYiIHu5AAa_XpnOym=s600-k-no-rp-mo"
                        alt=""
                    />
                    <h1>Mystery Code</h1>
                </header>
                <div className="menu">
                    <div className="item">
                        <a href="#">
                            <i className="fas fa-desktop"></i>Dashboard
                        </a>
                    </div>
                    <div className="item">
                        <a className="sub-btn" onClick={toggleSubMenu}>
                            <i className="fas fa-table"></i>Tables<i className="fas fa-angle-right dropdown"></i>
                        </a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">
                                Sub Item 01
                            </a>
                            <a href="#" className="sub-item">
                                Sub Item 02
                            </a>
                            <a href="#" className="sub-item">
                                Sub Item 03
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <a href="#">
                            <i className="fas fa-th"></i>Forms
                        </a>
                    </div>
                    <div className="item">
                        <a className="sub-btn" onClick={toggleSubMenu}>
                            <i className="fas fa-cogs"></i>Settings<i className="fas fa-angle-right dropdown"></i>
                        </a>
                        <div className="sub-menu">
                            <a href="#" className="sub-item">
                                Sub Item 01
                            </a>
                            <a href="#" className="sub-item">
                                Sub Item 02
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <a href="#">
                            <i className="fas fa-info-circle"></i>About
                        </a>
                    </div>
                </div>
            </div>
            <section className="main">
                <h1>Sidebar Menu With<br />Sub-Menus</h1>
            </section>
        </div>
    );
}

export default Sidebar;
