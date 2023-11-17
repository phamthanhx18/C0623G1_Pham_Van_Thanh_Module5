import {Component} from "react";
const listStudent = [
    {
        id: 1,
        name: "ThanhPV",
        age: "23",
        address: "Nghe An"
    },
    {
        id: 2,
        name: "HaiTT",
        age: "25",
        address: "Quang Nam"
    },
    {
        id: 3,
        name: "PhuongTD",
        age: "25",
        address: "Da Nang"
    }
];

class StudentInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listStudent: listStudent
        }
    }
    render() {
        return <>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Tuổi</th>
                <th>Địa chỉ</th>
            </tr>
            </thead>
            <tbody>
            {this.state.listStudent.map((student,index) => (
                <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
            </tbody>
        </table></>;
    }
}
export default StudentInfoComponent;