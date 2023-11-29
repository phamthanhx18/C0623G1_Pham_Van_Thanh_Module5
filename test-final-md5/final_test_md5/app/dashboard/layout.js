import Link from "next/link";
import MenuLink from "@/app/components/MenuLink";

export default function DashboardLayout(
    {
        children,
    }) {
    let arrObjLink = [
        {
            name: "Dashboard",
            href: "/dashboard"
        },
        {
            name: "Customer",
            href: "/dashboard/customer"
        },
        {
            name: "Employee",
            href: "/dashboard/employee"
        }
    ];
    return (
        <section>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-3">
                        <MenuLink arrObjectLink={arrObjLink}/>

                    </div>
                    <div className="col-lg-9">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}