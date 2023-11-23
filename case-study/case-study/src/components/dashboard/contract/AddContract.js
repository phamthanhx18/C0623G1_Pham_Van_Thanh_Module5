import React, {useState} from "react";
import * as contractService from "../../../services/ContractService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";

function AddContract() {
    const navigate = useNavigate();
    const initValue = {
        contractCode: "",
        startDate: "",
        endDate: "",
        deposit: null,
        totalPayment: null,
        customerName: ""
    }

    const handleAddContract = async (values) => {
        console.log(values)
        let isSuccess = contractService.addNewContract(values);
        if (isSuccess) {
            navigate("/dashboard/contract")
        }
    }

    const validation = Yup.object({
        customerName: Yup.string().required("Tên: Trường này bắt buộc nhập"),
        contractCode: Yup.string().required("Mã hợp đồng: Trường này bắt buộc nhập"),
        startDate: Yup.date().required("Ngày bắt đầu: Trường này bắt buộc nhập"),
        endDate: Yup.date().required("Ngày kết thúc: Trường này bắt buộc nhập"),
        deposit: Yup.number().required("Tiền đặt cọc: Trường này bắt buộc nhập").min(0,"Không bé hơn 0"),
        totalPayment: Yup.number().required("Tiền thanh toán: Trường này bắt buộc nhập").min(1,"Không bé hơn 1")
    })
    return (<>
        <div style={{height: 100}}></div>
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-12">
                    <h2>Thêm mới khách hàng</h2>
                    <Formik
                        initialValues={initValue}
                        onSubmit={(values) => {
                            handleAddContract(values)
                        }}
                        validationSchema={validation}
                    >
                        <Form>
                            <div className="row mb-3">
                                <label htmlFor="contractCode" className="col-sm-2 col-form-label">Mã hợp đồng</label>
                                <div className="col-sm-10">
                                    <Field name="contractCode" type="text" className="form-control" id="contractCode"/>
                                    <ErrorMessage name="contractCode"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="nameCustomer" className="col-sm-2 col-form-label">Họ tên khách
                                    hàng</label>
                                <div className="col-sm-10">
                                    <Field name="customerName" type="text" className="form-control" id="nameCustomer"/>
                                    <ErrorMessage name="customerName"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="startDate" className="col-sm-2 col-form-label">Ngày làm hợp đồng</label>
                                <div className="col-sm-10">
                                    <Field name="startDate" type="date" className="form-control" id="dateStart"/>
                                    <ErrorMessage name="startDate"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="endDate" className="col-sm-2 col-form-label">Ngày làm kết thúc</label>
                                <div className="col-sm-10">
                                    <Field name="endDate" type="date" className="form-control" id="dateEnd"/>
                                    <ErrorMessage name="endDate"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="deposit" className="col-sm-2 col-form-label">Số tiền đặt cọc</label>
                                <div className="col-sm-10">
                                    <Field name="deposit" type="number" className="form-control" id="money"/>
                                    <ErrorMessage name="deposit"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="total" className="col-sm-2 col-form-label">Tổng thanh toán</label>
                                <div className="col-sm-10">
                                    <Field name="totalPayment" type="number" className="form-control" id="total"/>
                                    <ErrorMessage name="totalPayment"/>
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

export default AddContract;