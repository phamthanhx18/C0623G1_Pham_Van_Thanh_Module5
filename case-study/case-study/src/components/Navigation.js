import React from 'react';
import {Link, NavLink} from "react-router-dom";
function Navigation() {
    return <>
        <div className="header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="logo d-none d-sm-none d-lg-block">
                <img src="/images/logo@2x.png" alt="Travel" height="50" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink to="/" className="nav-link px-4 link-light">Trang chủ</NavLink></li>
                <li><NavLink to="/villa" className="nav-link px-4 link-light">Thuê Villa</NavLink></li>
                <li><NavLink to="/house" className="nav-link px-4 link-light">Thuê House</NavLink></li>
                <li><NavLink to="/room" className="nav-link px-4 link-light">Thuê Phòng</NavLink></li>
            </ul>

            <div className="dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                         className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
            <div className="px-3 text-end">
                <button className="btn btn-primary">Liên hệ</button>
                <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
            </div>
        </div>
    </>
}
export default Navigation;