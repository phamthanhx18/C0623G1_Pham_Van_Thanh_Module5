import {getCustomerById} from "@/app/services/CustomerService";
import { cache } from 'react'

export const InfoCustomer = cache(async ({id}) => {
    let res = await getCustomerById(id);
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{res.title}</h5>
                    <p className="card-text">{res.age}</p>
                </div>
            </div>
        </div>
    );
});

export default function Page({params}) {
    return (
        <>
            <h1>Customer {params.id}</h1>
            <InfoCustomer id={params.id}/>
        </>
    )
}