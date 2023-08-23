import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SidebarItem({ item, onSelectMenuNode, menus }) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="fas fa-chevron-down toggle-btn"></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem menus={menus} key={child.id} onSelectMenuNode={onSelectMenuNode} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <NavLink to={item.path} onClick={() => onSelectMenuNode(menus, item)} className={item?.isSelected ? "sidebar-item plain sidebar-menu-title" : "sidebar-item plain"}>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </NavLink>
        )
    }
}