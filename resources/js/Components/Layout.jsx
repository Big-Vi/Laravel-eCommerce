import { Link } from '@inertiajs/react'

export default function Layout({children}) {
    return (
        <div>
            <div className="bg-black p-4 max-w-md">
                <nav>
                    <ul className='flex'>
                        <li className='pr-4'>
                            <Link className='text-white hover:text-gray-300 px-3 py-2' href="/products">Products</Link>
                        </li>
                        <li>
                            <Link className='text-white hover:text-gray-300 px-3 py-2' href="/collections">Collections</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='max-w-md px-4'>
                {children}
            </div>
        </div>
    )
}
