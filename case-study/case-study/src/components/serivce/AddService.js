import React from "react";

function AddService() {
    return (<>
        <div className="container">
            <div className="row my-5">
                <h2>Thêm mới dịch vụ</h2>
                <form>
                    <div className="row mb-3">
                        <label htmlFor="nameService" className="col-sm-2 col-form-label">Tên dịch vụ</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nameService" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="areaUse" className="col-sm-2 col-form-label">Diện tích sử dụng</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="areaUse" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="rentalPrice" className="col-sm-2 col-form-label">Chi phí thuê</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="rentalPrice" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="maxPeople" className="col-sm-2 col-form-label">Số lượng người tối đa</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="maxPeople" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="maxPeople" className="col-sm-2 col-form-label">Kiểu thuê</label>
                        <div className="col-sm-10">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Chọn kiểu thuê</option>
                                <option value={1}>Theo năm</option>
                                <option value={2}>Theo tháng</option>
                                <option value={3}>Theo ngày</option>
                                <option value={3}>Theo giờ</option>
                            </select></div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="standards" className="col-sm-2 col-form-label">Tiêu chuẩn phòng</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="standards" rows={5} defaultValue={""} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="amenities" className="col-sm-2 col-form-label">Tiện nghi khác</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="amenities" rows={5} defaultValue={""} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="areaPool" className="col-sm-2 col-form-label">Diện tích hồ bơi</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="areaPool" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="numberFloors" className="col-sm-2 col-form-label">Số tầng</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="numberFloors" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="freeService" className="col-sm-2 col-form-label">Dịch vụ miễn phí đi kèm</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="freeService" rows={5} defaultValue={""} />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Dịch vụ khác</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Massage
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck2" />
                                <label className="form-check-label" htmlFor="gridCheck2">
                                    Karaoke
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                <label className="form-check-label" htmlFor="gridCheck3">
                                    Buffet
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck4" />
                                <label className="form-check-label" htmlFor="gridCheck3">
                                    Nước uống
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck5" />
                                <label className="form-check-label" htmlFor="gridCheck3">
                                    Xe đưa đón
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="row mb-3">
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm mới</button>
                </form>
            </div>
        </div>
    </>);
}

export default AddService;