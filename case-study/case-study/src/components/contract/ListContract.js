import React from "react";

function ListContract() {
    return (<>
        <div className="container">
            <div className="row my-5">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>08/12/2020</td>
                        <td>12/12/2023</td>
                        <td>0</td>
                        <td>1.200.000 đ</td>
                        <td>Nguyễn Văn An</td>
                        <td>Nguyễn Thị Hào</td>
                    </tr>
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
    </>);
}

export default ListContract;