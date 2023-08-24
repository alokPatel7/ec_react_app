import React, { useState } from 'react';
import './Sidebar.css'; // Create a separate CSS file for your styles
import items from './MenuList.json'
import SidebarItem from './SidebarItems';
import { useLocation } from 'react-router-dom';

function Sidebar() {
    const [menus, setActiveMenu] = useState([...items]);
    const location = useLocation();

    const pathSegments = location.pathname.split('/');
    let lastValue = pathSegments[pathSegments.length - 1];

    const resetMenus = (obj, node) => {
        if (obj === node || obj?.path === lastValue) {
            obj.isSelected = true;
            lastValue = null;
        } else if (Array.isArray(obj)) {
            for (const item of obj) {
                resetMenus(item, node);
            }
        } else if (typeof obj === 'object' && obj !== null) {
            obj.isSelected = false;
            for (const key in obj) {
                resetMenus(obj[key], node);
            }
        }
    }

    const onSelectMenuNode = (obj, node) => {
        resetMenus(obj, node);
        setActiveMenu([...obj]);
    }

    return (
        <div className="sidebar">
            <div className="user-details">
                {/* <h2>This is user details</h2> */}
            </div>
            {menus.map((item, index) => <SidebarItem key={index} onSelectMenuNode={onSelectMenuNode} menus={menus} item={item} />)}
        </div>
    );
}

export default Sidebar;
