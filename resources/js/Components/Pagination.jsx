import { Link } from '@inertiajs/react'

export default function Pagination({links}) {
    return (
        <div>
            {links.length > 3 ? (
                <nav className="mt-4">
                <ul className="flex">
                    {links.map(({ active, label, url }) => (
                    <li key={label} className={`mr-2 ${active ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'} rounded-full`}>
                        <a
                        href={url}
                        className="block px-4 py-2"
                        dangerouslySetInnerHTML={{ __html: label }}
                        ></a>
                    </li>
                    ))}
                </ul>
                </nav>
            ) : null}
        </div>
    )
}
