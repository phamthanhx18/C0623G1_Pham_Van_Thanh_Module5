import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as villaService from "../../../services/VillaService";

function DetailVilla() {
    const [villa, setVilla] = useState({});
    const {id} = useParams()
    const getVillaById = async () => {
        let data = await villaService.getVillaById(id);
        setVilla(data.data);
    }
    useEffect(() => {
        getVillaById()
    }, []);

    return (
        <>
            <section style={{height: '300px'}}>
                <div className="card text-bg-dark">
                    <img src={villa.image} className="card-img" alt="..." height="300px" width="100%"/>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center"
                         style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>
                        <div className="container">
                            <div className="col-lg-8">
                                <h1>{villa.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="rental-villa">
                <div className="container my-5">
                    <h4 className="my-3 text-center">
                    </h4>
                    <div className="row">
                        <div>
                            <h1>{villa.title}</h1>
                            <h2>Overview</h2>
                            <p>{villa.description}</p>

                            <h2>Chi tiết</h2>
                            <ul>
                                <li>Diện tích: {villa.area}</li>
                                <li>Số người ở tối đa: {villa.maxPeople}</li>
                                <li>Diện tích hồ bơi: {villa.areaPool}</li>
                                <li>Số tầng: {villa.numberFloors}</li>
                            </ul>

                            <h2>Tiêu chuẩn phòng</h2>
                            <p>{villa.standards}</p>

                            <h2>Tiện nghi khác</h2>
                            <p>{villa.amenities} </p>

                            <h2>Chi phí thuê</h2>
                            <p>{villa.costs} USD/ Ngày</p>

                            <h2>Contact Information</h2>
                            <p>Tel: 84-236-3847 333/888 * Fax: 84-236-3847 666</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailVilla;