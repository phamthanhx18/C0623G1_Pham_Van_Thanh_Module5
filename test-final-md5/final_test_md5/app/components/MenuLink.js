import Link from "next/link";

export default function MenuLink({arrObjectLink}) {
    return <ul className="list-group list-group-flush">
        {arrObjectLink.map((item,index) => (
            <li key={index} className="list-group-item">
                <Link href={item.href}>{item.name}</Link>
            </li>
        ))}
    </ul>;
}