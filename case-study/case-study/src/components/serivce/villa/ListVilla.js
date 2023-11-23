import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as villaService from "../../../services/VillaService";

function ListVilla() {
    const [villas, setVillas] = useState([]);

    const showAllVilla = async () => {
        let data = await villaService.getAllVilla();
        setVillas(data.data);
    }
    useEffect(() => {
        showAllVilla()
    }, []);

    return (
        <>
            <section style={{height: '300px'}}>
                <div className="card text-bg-dark">
                    <img src="/images/villa-bg.png" className="card-img" alt="..." height="300px" width="100%"/>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center"
                         style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>
                        <div className="container">
                            <div className="col-lg-8">
                                <h1>Villa</h1>
                                <p>Cho thuê Villa cao cấp, sang trọng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="rental-villa">
                <div className="container my-5">
                    <h4 className="my-3 text-center">
                        Tất cả các phòng
                    </h4>
                    <div className="row">
                        {villas.map((item) => (
                            <div className="col-lg-4 mb-4" key={item.id}>
                                <div className="card">
                                    <img height="250px" src={`${item.image}`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p>Diện tích phòng: {item.area}</p>
                                        <Link to={`/villa/${item.id}`} className="btn btn-primary">Xem chi tiết</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ListVilla;