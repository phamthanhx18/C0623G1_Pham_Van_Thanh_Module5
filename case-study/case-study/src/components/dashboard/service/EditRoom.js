import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as roomService from "../../../services/RoomService";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

function EditRoom() {
    const [room, setRoom] = useState(null);
    const {id} = useParams()
    const navigation = useNavigate();

    const getDataEdit = async () => {
        const data = await roomService.getRoomById(id);
        setRoom(data.data);
    }

    const validation = Yup.object({
        title: Yup.string().required("Vui lòng nhập tiêu đề"),
        image: Yup.string().required("Vui lòng nhập đường dẫn ảnh"),
        area: Yup.number().required("Vui lòng nhập diện tích")
            .min(1,"Diện tích không nhỏ hơn 1m2"),
        description: Yup.string().required("Vui lòng nhập mô tả")
            .max(2000,"Mô tả phải bé hơn 2000 kí tự"),
        costs: Yup.number().required("Vui lòng nhập giá thuê").min(0, "Giá thuê phải lớn hơn hoặc bằng 0"),
        maxPeople: Yup.string().required("Vui lòng nhập số lượng người tối đa")
            .min(1, "Số lượng tối đa phải lớn hơn hoặc bằng 1")
            .max(20,"Số lượng tối đa phải bé hơn hoặc bằng 20"),
        freeService: Yup.string().required("Vui lòng nhập tiện ích miễn phí !"),
    })

    const handleSubmit = async (value) => {
        let isUpdate = roomService.updateRoom(value);
        if (isUpdate) {
            toast.success("Update thành công !")
            navigation("/dashboard/customer")
        } else {
            toast.error("Update thất bại !")
        }
    }
    useEffect(() => {
        getDataEdit()
    }, [])
    if (!room) {
        return null;
    } else {
        return (<>
            <div style={{height: 100}}></div>
            <div className="container">
                <div className="row my-5">
                    <h2>Chỉnh sửa Room</h2>
                    <Formik
                        initialValues={room}
                        onSubmit={(values) => handleSubmit(values)}
                        validationSchema={validation}>
                        <Form>
                            <div className="row mb-3">
                                <label htmlFor="nameService" className="col-sm-2 col-form-label">Tên dịch vụ</label>
                                <div className="col-sm-10">
                                    <Field name="title" type="text" className="form-control" id="nameService" />
                                    <ErrorMessage name="title"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="imageService" className="col-sm-2 col-form-label">Image</label>
                                <div className="col-sm-10">
                                    <Field name="image" type="text" className="form-control" id="nameService" />
                                    <ErrorMessage name="image"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="areaUse" className="col-sm-2 col-form-label">Diện tích sử dụng</label>
                                <div className="col-sm-10">
                                    <Field name="area" type="number" className="form-control" id="areaUse" />
                                    <ErrorMessage name="area"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Mô tả</label>
                                <div className="col-sm-10">
                                    <Field name="description" component="textarea" className="form-control" id="standards" rows="5"/>
                                    <ErrorMessage name="description"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="rentalPrice" className="col-sm-2 col-form-label">Chi phí thuê</label>
                                <div className="col-sm-10">
                                    <Field name="costs" type="number" className="form-control" id="rentalPrice" />
                                    <ErrorMessage name="costs"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="maxPeople" className="col-sm-2 col-form-label">Số lượng người tối đa</label>
                                <div className="col-sm-10">
                                    <Field name="maxPeople" type="number" className="form-control" id="maxPeople" />
                                    <ErrorMessage name="maxPeople"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="freeService" className="col-sm-2 col-form-label">Dịch vụ đi kèm miễn phí</label>
                                <div className="col-sm-10">
                                    <Field name="freeService" type="text" className="form-control" id="freeService" />
                                    <ErrorMessage name="freeService"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Cập nhật</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>);
    }
}

export default EditRoom;