import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
    return (
        <>
            <section id="banner" style={{height: "600px"}}>
                <div className="card text-bg-dark">
                    <img src="/images/Review-Furama-Resort-Da-Nang-13.jpg" className="card-img" alt="..." height="600px"
                         width="100%"/>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center"
                         style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)"}}>
                        <div className="container">
                            <div className="col-lg-8">
                                <h1>Tận hưởng kì nghỉ tuyệt vời cùng với Furama Resort</h1>
                                <p>196 phòng hạng sang cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng
                                    đều được
                                    trang trí trang nhã, theo phong cách thiết kế truyền thống của Việt Nam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="introduction">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <img src="/images/06-2.jpg" className="img-fluid" alt="..."/>
                        </div>
                        <div className="col-lg-5">
                            <p>Với kiến trúc độc đáo kết hợp giữa phong cách kiến trúc Chăm và Pháp, Furama Resort Đà
                                Nẵng tạo nên
                                không gian thoáng đãng, tràn ngập ánh sáng tự nhiên và hòa quyện với thiên nhiên xanh
                                mát xung
                                quanh. Khuôn viên rộng lớn của resort được bao bọc bởi các khu vườn xanh tươi, hồ nước
                                êm đềm và
                                đường lối thiết kế tinh tế, tạo nên không gian yên bình và sang trọng.</p>
                            <p>Furama Resort Đà Nẵng còn nổi tiếng với các nhà hàng đa dạng, từ ẩm thực Việt Nam truyền
                                thống đến
                                các món ăn quốc tế sang trọng. Những nhà hàng này không chỉ mang đến hương vị tuyệt vời
                                mà còn tận
                                dụng tối đa vị trí đắc địa để tạo nên trải nghiệm ẩm thực độc đáo.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service">
                <div className="container">
                    <h3>Dịch vụ của chúng tôi</h3>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <Link to="/villa">
                                <div className="card text-bg-dark">
                                    <img src="/images/villa.png" className="card-img" alt="..."/>
                                    <div
                                        className="text-center d-flex justify-content-center align-items-center card-img-overlay">
                                        <div>
                                            <h5 className="card-title">Villa</h5>
                                            <p className="card-text">Cho thuê Villa cao cấp, sang trọng</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/house">
                                <div className="card text-bg-dark">
                                    <img src="/images/house.png" className="card-img" alt="..."/>
                                    <div
                                        className="text-center d-flex justify-content-center align-items-center card-img-overlay">
                                        <div>
                                            <h5 className="card-title">House</h5>
                                            <p className="card-text">Cho thuê House cao cấp, sang trọng</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/room">
                                <div className="card text-bg-dark">
                                    <img src="/images/room.png" className="card-img" alt="..."/>
                                    <div
                                        className="text-center d-flex justify-content-center align-items-center card-img-overlay">
                                        <div>
                                            <h5 className="card-title">Room</h5>
                                            <p className="card-text">Cho thuê phòng lưu trú 5 sao, view biển</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;