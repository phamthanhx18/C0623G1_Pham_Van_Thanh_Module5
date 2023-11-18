import React from "react";

function AddContract() {
    return (<>
        <div className="container">
            <div className="row my-5">
                <h2>Thêm mới hợp đồng</h2>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="nameCustomer" className="col-sm-2 col-form-label">Họ tên khách hàng</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nameCustomer" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="dateStart" className="col-sm-2 col-form-label">Ngày làm hợp đồng</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="dateStart" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="dateEnd" className="col-sm-2 col-form-label">Ngày làm kết thúc</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="dateEnd" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Nhân viên phụ trách</label>
                        <div className="col-sm-10">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Chọn</option>
                                <option value={1}>Nguyễn Văn A</option>
                                <option value={2}>Nguyễn Văn B</option>
                                <option value={3}>Nguyễn Văn C</option>
                                <option value={4}>Nguyễn Văn D</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="money" className="col-sm-2 col-form-label">Số tiền đặt cọc</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="money" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="total" className="col-sm-2 col-form-label">Tổng thanh toán</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="total" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm mới</button>
                </form>
            </div>
        </div>
    </>);
}

export default AddContract;