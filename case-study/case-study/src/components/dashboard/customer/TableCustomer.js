import React from "react";
import Sidebar from "../Sidebar";

function TableCustomer() {
    const customers = [
        {
            id: 1,
            name: "Thành PV",
            gender: "Nam",
            customerType: "Diamond",
            phone: "0123456789",
            email: "phamthanhx18@gmail.com"
        },
        {
            id: 2,
            name: "Thành PV2",
            gender: "Nam",
            customerType: "Diamond",
            phone: "0123456789",
            email: "phamthanhx18@gmail.com"
        },
    ];

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
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tên khách hàng</th>
                                            <th scope="col">Giới tính</th>
                                            <th scope="col">Loại khách hàng</th>
                                            <th scope="col">Số điện thoại</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Thao tác</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {customers.map((customer, index) => (
                                            <tr key={customer.id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{customer.name}</td>
                                                <td>{customer.gender}</td>
                                                <td>{customer.customerType}</td>
                                                <td>{customer.phone}</td>
                                                <td>{customer.email}</td>
                                                <td>
                                                    <a href="#" className="btn btn-warning" role="button">Sửa</a>
                                                    <a href="#" className="btn btn-danger" role="button"
                                                       data-bs-toggle="modal" data-bs-target="#deleteModal">Xóa</a>
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
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
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
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
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