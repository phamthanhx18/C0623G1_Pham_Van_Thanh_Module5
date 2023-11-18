import React from 'react';
function Navigation() {
    return <>
        <div className="header d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="logo d-none d-sm-none d-lg-block">
                <img src="/images/logo@2x.png" alt="Travel" height="50" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-4 link-light">Trang chủ</a></li>
                <li><a href="#" className="nav-link px-4 link-light">Thuê Villa</a></li>
                <li><a href="#" className="nav-link px-4 link-light">Thuê House</a></li>
                <li><a href="#" className="nav-link px-4 link-light">Thuê Phòng</a></li>
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
            </div>
        </div>
    </>
}
export default Navigation;