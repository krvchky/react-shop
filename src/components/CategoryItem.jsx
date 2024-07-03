import { Link } from "react-router-dom"

export default function CategoryItem({cat, catid}) {
    return (
        <Link
            to= {
                    (cat.id === 0)
                        ? '/'
                        : `/category/${cat.id}`
                }
            className={`dropdown-item ${(catid == cat.id) ? "active" : "" }`}>
            {cat.title} 
        </Link>
    );
}
