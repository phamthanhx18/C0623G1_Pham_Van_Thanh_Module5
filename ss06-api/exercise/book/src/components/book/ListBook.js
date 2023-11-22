import React, {useEffect, useState} from 'react';
import * as bookService from "../../services/BookService";
import {Link} from "react-router-dom";

function ListBook() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        getAllBook();
    }, []);
    const getAllBook = async () => {
        let data = await bookService.getAllBook();
        setBooks(data);
    }

    const handleDeleteBook = async (item) => {
        let isDelete = await bookService.deleteBook(item)
        getAllBook();
    }

    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3>Thư viện sách</h3>
                <Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sách</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {books.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/edit/${item.id}`}>Chỉnh sửa</Link>
                        </td>
                        <td>
                            <button  className="btn btn-danger" onClick={() => handleDeleteBook(item)}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListBook;