import React, {useEffect, useState} from "react";
import * as roomService from "../../services/RoomService";
import {Link} from "react-router-dom";

function ListRoom() {
    const [rooms, setRooms] = useState([]);

    const showAllRoom = async () => {
        let data = await roomService.getAllRoom();
        setRooms(data.data);
    }
    useEffect(() => {
        showAllRoom()
    }, []);

    return (
        <>
            <section style={{height: '300px'}}>
                <div className="card text-bg-dark">
                    <img src="/images/room-bg.png" className="card-img" alt="..." height="300px" width="100%" />
                    <div className="card-img-overlay d-flex justify-content-center align-items-center" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>
                        <div className="container">
                            <div className="col-lg-8">
                                <h1>Room</h1>
                                <p>Cho thuê Room cao cấp, sang trọng</p>
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
                        {rooms.map((item) => (
                            <div className="col-lg-4 mb-4" key={item.id}>
                                <div className="card">
                                    <img src="/images/img-room-default.png" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p>Diện tích phòng: {item.area}</p>
                                        <Link to={`/room/${item.id}`} className="btn btn-primary">Xem chi tiết</Link>
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

export default ListRoom;