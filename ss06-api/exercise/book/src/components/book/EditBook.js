import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import * as bookService from "../../services/BookService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

function EditBook() {
    let param = useParams();
    let idBook = param.bookId;
    const [book, setBook] = useState({
        title: "",
        quantity: 1
    })
    useEffect(() => {
        getBookById();
    }, []);

    const getBookById = async () => {
        let data = await bookService.getBook(idBook);
        setBook(data);
    }

    const handleUpdateBook = async (values) => {
        let isSuccess = await bookService.createBook(values);
        if(isSuccess) {
            toast.success("Update thành công")
        } else {
            toast.error("Lỗi")
        }
    }
    return (
        <div className="container mt-4">
            <h1>Add a new Book</h1>
            <Formik
                initialValues={book}
                onSubmit={(values) => {
                    handleUpdateBook(values)
                }}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field type="text" className="form-control" id="title" name="title" placeholder="Nhập title"/>
                        <ErrorMessage name="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field type="number" className="form-control" id="quantity" name="quantity" placeholder="Nhập số lượng"/>
                        <ErrorMessage name="quantity"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </Form>
            </Formik>
        </div>
    );
}

export default EditBook;