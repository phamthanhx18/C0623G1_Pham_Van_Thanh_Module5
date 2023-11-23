import React from "react";
import Sidebar from "../Sidebar";

function TableContract() {
    const contracts = [
        {
            id: 1,
            contractCode: "XMDASJDA",
            startDate: "08/12/2020",
            endDate: "12/12/2023",
            deposit: 0,
            totalPayment: 1200000,
            employee: "Nguyễn Văn An",
            customerName: "Nguyễn Thị Hào"
        },
        {
            id: 2,
            contractCode: "BADASJDA",
            startDate: "08/12/2020",
            endDate: "12/12/2023",
            deposit: 0,
            totalPayment: 1200000,
            employee: "Nguyễn Văn An",
            customerName: "Nguyễn Thị Hào"
        },
    ];

    return (
        <>
            <div className="row" style={{height: 100}}></div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-3">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9">
                        <h2>Danh sách hợp đồng</h2>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Mã hợp đồng</th>
                                <th scope="col">Ngày làm hợp đồng</th>
                                <th scope="col">Ngày kết thúc</th>
                                <th scope="col">Tiền đặt cọc</th>
                                <th scope="col">Tổng thanh toán</th>
                                <th scope="col">Nhân viên phụ trách</th>
                                <th scope="col">Tên khách hàng</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contracts.map((contract, index) => (
                                <tr key={contract.id}>
                                    <th scope="row">{contract.contractCode}</th>
                                    <td>{contract.startDate}</td>
                                    <td>{contract.endDate}</td>
                                    <td>{contract.deposit}</td>
                                    <td>{contract.totalPayment}</td>
                                    <td>{contract.employee}</td>
                                    <td>{contract.customerName}</td>
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

                </div>
            </div>
        </>
    );
}

export default TableContract;