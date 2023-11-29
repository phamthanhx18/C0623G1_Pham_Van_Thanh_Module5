import React, {useEffect, useState} from "react";
import Sidebar from "../Sidebar";
import {Link} from "react-router-dom";
import * as contractCustomer from "../../../services/ContractService";
import {number} from "yup";
import {toast} from "react-toastify";

function TableContract() {
    const [contracts, setContracts] = useState([]);
    const [filter, setFilter] = useState({
        page: 1,
        limit: 1,
        contractCode: null,
        customerName: null,
        totalPage: 0
    })

    const getAllContracts = async () => {
        let data = await contractCustomer.getAllContract();
        setContracts(data.data);
    }
    useEffect(() => {
        getAllContracts()
    }, []);

    const handleChangeCodeContract = (event) => {
        if (event.target.value !== '') {
            setFilter({
                ...filter,
                contractCode: event.target.value
            });
        } else {
            setFilter({
                ...filter,
                contractCode: null
            });
        }
    };
    const handleChangeCustomerName = (event) => {
        if (event.target.value !== '') {
            setFilter({
                ...filter,
                customerName: event.target.value
            });
        } else {
            setFilter({
                ...filter,
                customerName: null
            });
        }
    };
    const filterTable = async () => {
        let data = await contractCustomer.searchContract(filter);
        setContracts(data.data)
        setFilter({
            ...filter,
            totalPage: parseInt(data.headers.get('x-total-count') / filter.limit)
        })
    };

    useEffect(() => {
        filterTable()
    }, [filter.page]);

    const nextPage = () => {
        if (filter.page === filter.totalPage) {
            toast.error("Bạn đã ở trang cuối cùng !")
        } else {
            setFilter({
                ...filter,
                page: filter.page +1
            })
        }
    };
    const previousPage = (event) => {
        if (filter.page === 1) {
            toast.error("Bạn đã ở trang đầu tiên !")
        } else {
            setFilter({
                ...filter,
                page: filter.page -1
            })
        }
    };
    return (
        <>
            <div className="row" style={{height: 100}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9">
                        <h2>Danh sách hợp đồng</h2>
                        <div>
                            <Link className="btn btn-primary" to="/dashboard/contract/add">Thêm mới hợp đồng</Link>
                        </div>
                        <div className="row my-3">
                            <div className="col">
                                <input type="text" className="form-control"
                                       onChange={(event) => handleChangeCodeContract(event)}
                                       placeholder="Mã hợp đồng" aria-label="Mã hợp đồng"/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control"
                                       onChange={(event) => handleChangeCustomerName(event)}
                                       placeholder="Tên khách hàng" aria-label="Last name"/>
                            </div>
                            <div className="col">
                                <a role="button" onClick={filterTable} className="btn btn-primary">Tìm</a>
                            </div>
                        </div>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Mã hợp đồng</th>
                                <th scope="col">Ngày làm hợp đồng</th>
                                <th scope="col">Ngày kết thúc</th>
                                <th scope="col">Tiền đặt cọc</th>
                                <th scope="col">Tổng thanh toán</th>
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
                                    <td>{contract.customerName}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className={filter.page === 1 ? 'page-item disabled':'page-item'}>
                                    <Link aria-disabled={filter.page === 1} className="page-link"
                                          role="button" onClick={() => previousPage()}>Previous</Link>
                                </li>

                                <li className={filter.page === filter.totalPage ? 'page-item disabled':'page-item'}>
                                    <Link aria-disabled={filter.page === filter.totalPage} className="page-link"
                                          role="button" onClick={() => nextPage()}>Next</Link>
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