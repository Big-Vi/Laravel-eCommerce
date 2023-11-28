import { Link } from '@inertiajs/react'

export default function Layout({children}) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/collections">Collections</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
