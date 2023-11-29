import React, {useEffect, useState} from "react";
import Sidebar from "../Sidebar";
import * as customerService from "../../../services/CustomerService";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

function TableCustomer() {
    const [customers, setCustomers] = useState([]);
    const [customerDelete, setCustomerDelete] = useState([]);
    const [filter, setFilter] = useState({
        name: "",
        phone: ""
    })
    const getAllCustomer = async () => {
        let data = await customerService.getAllCustomer();
        setCustomers(data.data);
    }
    useEffect(() => {
        getAllCustomer()
    }, []);

    const deleteCustomer = async () => {
        let isDelete = await customerService.deleteCustomerById(customerDelete.id);
        getAllCustomer();
        if (isDelete) {
            toast.success("Xóa khách hàng thành công !")
        } else {
            toast.error("Xóa khách hàng thất bại !")
        }
    };
    const changeNameFilter = (value) => {
        setFilter({
            ...filter,
            name: value.target.value
        })
    };
    const changePhoneFilter = (value) => {
        setFilter({
            ...filter,
            phone: value.target.value
        })
    };
    const searchCustomerBtn = async () => {
        let res = await customerService.searchCustomer(filter);
        setCustomers(res.data)
    };
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
                                    <h4 className="mb-3">Danh sách khách hàng tại Furama Resort</h4>
                                    <div>
                                        <Link className="btn btn-primary" to="/dashboard/customer/add">Thêm mới khách
                                            hàng</Link>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col">
                                            <input onChange={(value) => changeNameFilter(value)} type="text" className="form-control"
                                                   placeholder="Tên khách hàng" aria-label="Tên khách hàng"/>
                                        </div>
                                        <div className="col">
                                            <input onChange={(value) => changePhoneFilter(value)} type="text" className="form-control"
                                                   placeholder="Số điện thoại" aria-label="Số điện thoại"/>
                                        </div>
                                        <div className="col">
                                            <a onClick={searchCustomerBtn} role="button" className="btn btn-primary">Tìm</a>
                                        </div>
                                    </div>
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tên khách hàng</th>
                                            <th scope="col">Giới tính</th>
                                            <th scope="col">Số điện thoại</th>
                                            <th scope="col">Địa chỉ</th>
                                            <th scope="col">Thao tác</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {customers.map((customer, index) => (
                                            <tr key={customer.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{customer.name}</td>
                                                <td>{customer.gender == 0 ? 'Nam' : 'Nữ'}</td>
                                                <td>{customer.phone}</td>
                                                <td>{customer.address}</td>
                                                <td>
                                                    <Link to={`/dashboard/customer/edit/${customer.id}`}
                                                          className="btn btn-warning" role="button">Sửa</Link>
                                                    <button onClick={() => setCustomerDelete(customer)}
                                                            className="btn btn-danger" role="button"
                                                            data-bs-toggle="modal" data-bs-target="#deleteModal">Xóa
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </section>
                            <div className="modal fade" id="deleteModal" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thông báo </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Bạn có chắc chắn xóa người dùng {customerDelete.name}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                            <button data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                    onClick={() => deleteCustomer()} type="button"
                                                    className="btn btn-primary">Xóa
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

export default TableCustomer;