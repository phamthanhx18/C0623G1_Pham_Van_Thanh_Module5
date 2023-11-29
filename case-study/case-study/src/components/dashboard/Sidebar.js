import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Sidebar() {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <NavLink to="#">Tổng quan</NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/dashboard/contract">Quản lý hợp đồng</NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/dashboard/customer">Quản lý khách hàng</NavLink>
            </li>
            <li className="list-group-item">
                <NavLink to="/dashboard/service">Quản lý dịch vụ</NavLink>
            </li>
        </ul>
    );
}

export default Sidebar;