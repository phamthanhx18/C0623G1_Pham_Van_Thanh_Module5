import * as customerService from "../../services/CustomerService";
import {getAllCustomer} from "../../services/CustomerService";
import Link from "next/link";

export const metadata = {
    title: 'Trang Customer Next.js',
}

async function GetList() {
    const customers = await getAllCustomer()
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Tuổi</th>
                <th scope="col">Loại Khách</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((item, index) => (
                <tr key={item.id}>
                    <td scope="row">{index}</td>
                    <td>{item.title}</td>
                    <td>{item.age}</td>
                    <td>@mdo</td>
                    <td>
                        <Link className="btn btn-primary" href={`/dashboard/customer/${item.id}`}>Xem chi tiết</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default function DashboardCustomer() {
    return (
        <section>
            <Link href={"/dashboard/customer/add"}>Thêm mới khách hàng</Link>
            <h3>Customer</h3>
            <GetList/>
        </section>
    )
}