import React, {useEffect, useState} from "react";
import Sidebar from "../Sidebar";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import * as villaService from "../../../services/VillaService";
import * as houseService from "../../../services/HouseService";
import * as roomService from "../../../services/RoomService";
import {Link} from "react-router-dom";
import * as customerService from "../../../services/CustomerService";
import {toast} from "react-toastify";

function TableService() {
    const [villas, setVillas] = useState([]);
    const [houses, setHouses] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [typeService, setTypeService] = useState([]);
    const [serviceDelete, setServiceDelete] = useState({});

    const showAllRoom = async () => {
        let data = await roomService.getAllRoom();
        setRooms(data.data);
    }

    const showAllHouse = async () => {
        let data = await houseService.getAllHouse();
        setHouses(data.data);
    }
    const showAllVilla = async () => {
        let data = await villaService.getAllVilla();
        setVillas(data.data);
    }

    const handleDeleteService = async () => {
        let isDelete;
        switch (typeService) {
            case "villa":
                isDelete = await villaService.deleteVillaById(serviceDelete.id);
                showAllVilla();
                break;
            case "house":
                isDelete = await houseService.deleteHouseById(serviceDelete.id);
                showAllHouse();
                break;
            case "room":
                isDelete = await roomService.deleteRoomById(serviceDelete.id);
                showAllRoom();
                break;
        }
        if (isDelete) {
            toast.success("Xóa dịch vụ thành công !")
        } else {
            toast.error("Xóa dịch vụ thất bại !")
        }
    }
    useEffect(() => {
        showAllVilla();
        showAllRoom();
        showAllHouse();
    }, []);

    return (
        <>
            <div>
                <div className="container">
                    <div style={{height: 100}}></div>
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9">
                            <section id="dashboard-customer">
                                <div className="row">
                                    <h4 className="mb-3">Danh sách dịch vụ tại Furama Resort</h4>
                                    <Tabs>
                                        <TabList>
                                            <Tab>Villa</Tab>
                                            <Tab>House</Tab>
                                            <Tab>Room</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div><Link className="btn btn-primary" to="/dashboard/villa/add">Thêm mới
                                                Villa</Link></div>
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Tên dịch vụ</th>
                                                    <th scope="col">Diện tích</th>
                                                    <th scope="col">Giá thuê</th>
                                                    <th scope="col">Số người ở</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {villas.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.title}</td>
                                                        <td>{item.area}</td>
                                                        <td>{item.costs}</td>
                                                        <td>{item.maxPeople}</td>
                                                        <td>
                                                            <Link to={`/dashboard/villa/edit/${item.id}`}
                                                                  className="btn btn-warning" role="button">Sửa</Link>
                                                            <button onClick={() => {
                                                                setServiceDelete(item);
                                                                setTypeService("villa")
                                                            }}
                                                                    className="btn btn-danger" role="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal">Xóa
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </TabPanel>
                                        <TabPanel>
                                            <div><Link className="btn btn-primary" to="/dashboard/house/add">Thêm mới
                                                House</Link></div>
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Tên dịch vụ</th>
                                                    <th scope="col">Diện tích</th>
                                                    <th scope="col">Giá thuê</th>
                                                    <th scope="col">Số người ở</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {houses.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.title}</td>
                                                        <td>{item.area}</td>
                                                        <td>{item.costs}</td>
                                                        <td>{item.maxPeople}</td>
                                                        <td>
                                                            <Link to={`/dashboard/house/edit/${item.id}`}
                                                                  className="btn btn-warning" role="button">Sửa</Link>
                                                            <button onClick={() => {
                                                                setServiceDelete(item);
                                                                setTypeService("house")
                                                            }}
                                                                    className="btn btn-danger" role="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal">Xóa
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </TabPanel>
                                        <TabPanel>
                                            <div><Link className="btn btn-primary" to="/dashboard/room/add">Thêm mới
                                                Room</Link></div>
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Tên dịch vụ</th>
                                                    <th scope="col">Diện tích</th>
                                                    <th scope="col">Giá thuê</th>
                                                    <th scope="col">Số người ở</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {rooms.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.title}</td>
                                                        <td>{item.area}</td>
                                                        <td>{item.costs}</td>
                                                        <td>{item.maxPeople}</td>
                                                        <td>
                                                            <Link to={`/dashboard/room/edit/${item.id}`}
                                                                  className="btn btn-warning" role="button">Sửa</Link>
                                                            <button onClick={() => {
                                                                setServiceDelete(item);
                                                                setTypeService("room")
                                                            }}
                                                                    className="btn btn-danger" role="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal">Xóa
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </section>
                            <div className="modal fade" id="deleteModal" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thông báo !</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Bạn có chắc chắn muốn xóa dịch vụ {serviceDelete.title} không?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal"> Đóng
                                            </button>
                                            <button onClick={() => handleDeleteService()} type="button"
                                                    class="btn btn-danger" data-bs-dismiss="modal"
                                                    aria-label="Close">Xóa
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableService;