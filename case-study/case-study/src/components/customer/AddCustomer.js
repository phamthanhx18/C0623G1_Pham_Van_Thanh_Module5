import React from "react";

function AddCustomer() {
    return (<>
        <div className="container">
            <div className="row my-5">
                <h2>Thêm mới khách hàng</h2>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="nameCustomer" className="col-sm-2 col-form-label">
                            Họ tên
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nameCustomer" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="birthday" className="col-sm-2 col-form-label">
                            Ngày sinh
                        </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="birthday" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Giới tính</label>
                        <div className="col-sm-10">
                            <select className="form-select" aria-label="Default select example">
                                <option selected="">Chọn giới tính</option>
                                <option value={1}>Nam</option>
                                <option value={2}>Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="idCard" className="col-sm-2 col-form-label">
                            Số CMND
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="idCard" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
                            Số điện thoại
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phoneNumber" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Loại khách</label>
                        <div className="col-sm-10">
                            <select className="form-select" aria-label="Default select example">
                                <option selected="">Chọn</option>
                                <option value={1}>Diamond</option>
                                <option value={2}>Platinium</option>
                                <option value={3}>Gold</option>
                                <option value={4}>Silver</option>
                                <option value={5}>Member</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Thêm mới
                    </button>
                </form>
            </div>
        </div>
    </>);
}

export default AddCustomer;