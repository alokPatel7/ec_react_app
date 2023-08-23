import React, { useState } from 'react';
import './Sidebar.css'; // Create a separate CSS file for your styles
import items from './Sidebar.json'
import SidebarItem from './SidebarItems';

function Sidebar() {
    const [menus, setActiveMenu] = useState([...items]);

    const resetMenus = (obj, node) => {
        if (obj === node) {
            obj.isSelected = true;
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
