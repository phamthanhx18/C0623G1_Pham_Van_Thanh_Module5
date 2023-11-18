import React from 'react';

function Footer() {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <p>Địa chỉ: 103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City,
                            Vietnam</p>
                        <p>Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666</p>
                        <p>Email: reservation@furamavietnam.com * www.furamavietnam.com GDS Codes: Amadeus-GD DADFUR,
                            Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD DADFU</p>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Liên kết nhanh</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Giá công bố</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Lifestyle Blog</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tuyển dụng</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Liên hệ</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4 mb-3">
                        <h5>Đối tác của chúng tôi</h5>
                        <ul className="nav flex-column">
                            <img src="/images/Ariyana-Tourism-Complex-03-500x131.png" alt="" width="100%" />
                        </ul>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 Furama Resort, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;