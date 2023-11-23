import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAll, remove} from "../service/UserService";
import {getAllUser, removeUserMiddle} from "../redux/middlewares/UserMiddleware";

export default function Users() {
    const users = useSelector((store) => store.users);
    const [userDelete, setUserDelete] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    const handleDelete = () => {
        dispatch(removeUserMiddle(userDelete.id));
    }
    if (!users) {
        return null;
    }

    return (
        <div className="container my-3">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((item,index) => (
                    <tr key={item.id}>
                        <th scope="row">{index +1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                        <td>
                            <button onClick={() => setUserDelete(item)} type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Thông báo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc chắn muốn xóa người dùng {userDelete.name}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => handleDelete()} type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}