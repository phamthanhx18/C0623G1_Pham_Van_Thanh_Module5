import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as houseService from "../../services/HouseService";

function DetailHouse() {
    const [house, setHouse] = useState({});
    const {id} = useParams()
    const getHouseById = async () => {
        let data = await houseService.getHouseById(id);
        setHouse(data.data);
    }
    useEffect(() => {
        getHouseById()
    }, []);

    return (
        <>
            <section style={{height: '300px'}}>
                <div className="card text-bg-dark">
                    <img src={house.image} className="card-img" alt="..." height="300px" width="100%"/>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center"
                         style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>
                        <div className="container">
                            <div className="col-lg-8">
                                <h1>{house.title}</h1>
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
                            <h1>{house.title}</h1>
                            <h2>Overview</h2>
                            <p>{house.description}</p>

                            <h2>Chi tiết</h2>
                            <ul>
                                <li>Diện tích: {house.area}</li>
                                <li>Số người ở tối đa: {house.maxPeople}</li>
                                <li>Số tầng: {house.numberFloors}</li>
                            </ul>

                            <h2>Tiêu chuẩn phòng</h2>
                            <p>{house.standards}</p>

                            <h2>Tiện nghi khác</h2>
                            <p>{house.amenities} </p>

                            <h2>Chi phí thuê</h2>
                            <p>{house.costs} USD/ Ngày</p>

                            <h2>Contact Information</h2>
                            <p>Tel: 84-236-3847 333/888 * Fax: 84-236-3847 666</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailHouse;