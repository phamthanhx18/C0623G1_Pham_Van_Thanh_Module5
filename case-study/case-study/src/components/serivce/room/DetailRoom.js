import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as roomService from "../../../services/RoomService";

function DetailRoom() {
    const [room, setRoom] = useState({});
    const {id} = useParams()
    const getRoomById = async () => {
        let data = await roomService.getRoomById(id);
        setRoom(data.data);
    }
    useEffect(() => {
        getRoomById()
    }, []);

    return (
        <>
            <section style={{height: '300px'}}>
                <div className="card text-bg-dark">
                    <img src={room.image} className="card-img" alt="..." height="300px" width="100%"/>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center"
                         style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>
                        <div className="container">
                            <div className="col-lg-8">
                                <h1>{room.title}</h1>
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
                            <h1>{room.title}</h1>
                            <h2>Overview</h2>
                            <p>{room.description}</p>

                            <h2>Chi tiết</h2>
                            <ul>
                                <li>Diện tích: {room.area}</li>
                                <li>Số người ở tối đa: {room.maxPeople}</li>
                            </ul>

                            <h2>Tiện nghi miễn phí</h2>
                            <p>{room.freeService} </p>

                            <h2>Chi phí thuê</h2>
                            <p>{room.costs} USD/ Ngày</p>

                            <h2>Contact Information</h2>
                            <p>Tel: 84-236-3847 333/888 * Fax: 84-236-3847 666</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailRoom;