import React, {useState} from "react";
import * as customerService from "../../../services/CustomerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function AddCustomer() {
    const navigate = useNavigate();
    const initValue = {
        name: "",
        birthday: "",
        gender: "",
        typeCustomer: "",
        idCard: "",
        phone: "",
        email: "",
        address: ""
    }

    const handleAddCustomer = async (values) => {
        let isSuccess = await customerService.addNewCustomer(values);
        if (isSuccess) {
            toast.success("Thêm mới khách hàng thành công !")
        } else {
            toast.error("Thêm mới khách hàng thất bại !")
        }
    }

    const validation = Yup.object({
        name: Yup.string().required("Tên: Trường này bắt buộc nhập"),
        birthday: Yup.date().required("Ngày sinh: Trường này bắt buộc nhập"),
        gender: Yup.string().required("Giới tính: Trường này bắt buộc nhập"),
        typeCustomer: Yup.string().required("TypeCustomer: Trường này bắt buộc nhập"),
        idCard: Yup.string().required("idCard: Trường này bắt buộc nhập")
            .max(12,"CMND không quá  12 kí tự")
            .min(9,"CMND không ít hơn 9 kí tự"),
        phone: Yup.string().required("phone: Trường này bắt buộc nhập"),
        email: Yup.string().required("email: Trường này bắt buộc nhập"),
        address: Yup.string().required("address: Trường này bắt buộc nhập")
    })
    return (<>
        <div className="container">
            <div style={{height: 100}}></div>
            <div className="row my-5">
                <div className="col-lg-12">
                    <h2>Thêm mới khách hàng</h2>
                    <Formik
                        initialValues={initValue}
                        onSubmit={(values) => {
                            handleAddCustomer(values)
                        }}
                        validationSchema={validation}
                    >
                        <Form>
                            <div className="row mb-3">
                                <label htmlFor="nameCustomer" className="col-sm-2 col-form-label">
                                    Họ tên
                                </label>
                                <div className="col-sm-10">
                                    <Field name="name" type="text" className="form-control" id="nameCustomer"/>
                                    <ErrorMessage name="name"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="birthday" className="col-sm-2 col-form-label">
                                    Ngày sinh
                                </label>
                                <div className="col-sm-10">
                                    <Field name="birthday" type="date" className="form-control" id="birthday"/>
                                    <ErrorMessage name="birthday"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Giới tính</label>
                                <div className="col-sm-10">
                                    <Field name="gender" as="select" className="form-select" aria-label="Default select example">
                                        <option selected="">Chọn giới tính</option>
                                        <option value="1">Nam</option>
                                        <option value="2">Nữ</option>
                                    </Field>
                                    <ErrorMessage name="gender"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="idCard" className="col-sm-2 col-form-label">
                                    Số CMND
                                </label>
                                <div className="col-sm-10">
                                    <Field name="idCard" type="text" className="form-control" id="idCard"/>
                                    <ErrorMessage name="idCard"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">
                                    Số điện thoại
                                </label>
                                <div className="col-sm-10">
                                    <Field name="phone" type="text" className="form-control" id="phoneNumber"/>
                                    <ErrorMessage name="phone"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-2 col-form-label">
                                    Email
                                </label>
                                <div className="col-sm-10">
                                    <Field name="email" type="email" className="form-control" id="email"/>
                                    <ErrorMessage name="email"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="address" className="col-sm-2 col-form-label">
                                    address
                                </label>
                                <div className="col-sm-10">
                                    <Field name="address" type="text" className="form-control" id="address"/>
                                    <ErrorMessage name="address"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Loại khách</label>
                                <div className="col-sm-10">
                                    <Field as="select" name="typeCustomer" className="form-select" aria-label="Default select example">
                                        <option selected="">Chọn</option>
                                        <option value="1">Diamond</option>
                                        <option value="2">Platinium</option>
                                        <option value="3">Gold</option>
                                        <option value="4">Silver</option>
                                        <option value="5">Member</option>
                                    </Field>
                                    <ErrorMessage name="typeCustomer"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Thêm mới
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </>);
}

export default AddCustomer;